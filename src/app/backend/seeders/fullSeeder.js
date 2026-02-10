require('dotenv').config();
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const { User } = require('../models/user.model');
const Profile = require('../models/profile.model');
const Preferences = require('../models/preferences.model');
const Ingredient = require('../models/ingredient.model');
const Meal = require('../models/meal.model');
const MealPlan = require('../models/mealPlan.model');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log(' Kết nối MongoDB thành công'))
  .catch(err => {
    console.error(' Lỗi:', err);
    process.exit(1);
  });

const calculateMetrics = ({ age, gender, height, weight, activityLevel, goal }) => {
  const activityMultipliers = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, very_active: 1.9 };
  const goalOffsets = { lose: -500, maintain: 0, gain: 500 };
  const bmi = weight / Math.pow(height / 100, 2);
  const base = 10 * weight + 6.25 * height - 5 * age;
  let bmr = gender === 'male' ? base + 5 : base - 161;
  const tdee = bmr * (activityMultipliers[activityLevel] || 1.2);
  const targetCalories = tdee + (goalOffsets[goal] || 0);
  return {
    bmi: Math.round(bmi * 10) / 10,
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    targetCalories: Math.round(targetCalories)
  };
};

async function seedDatabase() {
  try {
    console.log('  Xóa dữ liệu cũ...');
    await Promise.all([
      User.deleteMany({}),
      Profile.deleteMany({}),
      Preferences.deleteMany({}),
      Ingredient.deleteMany({}),
      Meal.deleteMany({}),
      MealPlan.deleteMany({})
    ]);
    
    // 1. TẠO NGƯỜI DÙNG
    console.log('\n👤 Tạo người dùng...');
    const usersData = [
      { email: 'nguyenvana@gmail.com', password: 'password123', profile: { age: 25, gender: 'male', height: 170, weight: 65, activityLevel: 'moderate', goal: 'maintain' }, pref: { dietType: 'standard', allergies: [], mealsPerDay: 3 } },
      { email: 'tranthib@gmail.com', password: 'password123', profile: { age: 30, gender: 'female', height: 160, weight: 55, activityLevel: 'light', goal: 'lose' }, pref: { dietType: 'vegetarian', allergies: ['dairy'], mealsPerDay: 4 } },
      { email: 'levanc@gmail.com', password: 'password123', profile: { age: 28, gender: 'male', height: 175, weight: 75, activityLevel: 'active', goal: 'gain' }, pref: { dietType: 'standard', allergies: [], mealsPerDay: 3 } },
      { email: 'phamthid@gmail.com', password: 'password123', profile: { age: 35, gender: 'female', height: 165, weight: 60, activityLevel: 'moderate', goal: 'maintain' }, pref: { dietType: 'vegan', allergies: ['dairy', 'eggs'], mealsPerDay: 5 } },
      { email: 'hoangvane@gmail.com', password: 'password123', profile: { age: 22, gender: 'male', height: 168, weight: 58, activityLevel: 'light', goal: 'gain' }, pref: { dietType: 'standard', allergies: ['seafood'], mealsPerDay: 3 } },
      { email: 'vuthif@gmail.com', password: 'password123', profile: { age: 27, gender: 'female', height: 158, weight: 52, activityLevel: 'moderate', goal: 'lose' }, pref: { dietType: 'vegetarian', allergies: [], mealsPerDay: 4 } },
      { email: 'dangvang@gmail.com', password: 'password123', profile: { age: 32, gender: 'male', height: 180, weight: 85, activityLevel: 'very_active', goal: 'lose' }, pref: { dietType: 'standard', allergies: ['nuts'], mealsPerDay: 3 } },
      { email: 'ngothih@gmail.com', password: 'password123', profile: { age: 26, gender: 'female', height: 162, weight: 58, activityLevel: 'active', goal: 'maintain' }, pref: { dietType: 'standard', allergies: [], mealsPerDay: 4 } },
      { email: 'buivani@gmail.com', password: 'password123', profile: { age: 29, gender: 'male', height: 172, weight: 70, activityLevel: 'moderate', goal: 'maintain' }, pref: { dietType: 'vegetarian', allergies: ['dairy'], mealsPerDay: 3 } },
      { email: 'dothik@gmail.com', password: 'password123', profile: { age: 24, gender: 'female', height: 156, weight: 50, activityLevel: 'light', goal: 'gain' }, pref: { dietType: 'vegan', allergies: ['dairy', 'eggs'], mealsPerDay: 5 } },
    ];
    
    const users = [];
    for (const userData of usersData) {
      const hashedPassword = await bcryptjs.hash(userData.password, 10);
      const user = await User.create({
        email: userData.email,
        password: hashedPassword,
        isVerified: true
      });
      users.push({ ...user.toObject(), profile: userData.profile, pref: userData.pref });
    }
    console.log(` Đã tạo ${users.length} người dùng`);
    
    // 2. TẠO PROFILES
    console.log('\n Tạo profiles...');
    for (const user of users) {
      const metrics = calculateMetrics(user.profile);
      await Profile.create({
        userId: user._id,
        ...user.profile,
        ...metrics
      });
    }
    console.log(` Đã tạo ${users.length} profiles`);
    
    // 3. TẠO PREFERENCES
    console.log('\n  Tạo preferences...');
    for (const user of users) {
      await Preferences.create({
        userId: user._id,
        ...user.pref
      });
    }
    console.log(` Đã tạo ${users.length} preferences`);
    
    // 4. TẠO NGUYÊN LIỆU
    console.log('\n Tạo nguyên liệu...');
    const ingredientsData = require('./ingredientsData');
    const ingredients = await Ingredient.insertMany(ingredientsData);
    console.log(` Đã tạo ${ingredients.length} nguyên liệu`);
    
    const ingredientIds = {};
    ingredients.forEach(ing => {
      ingredientIds[ing.name] = ing._id;
    });
    
    // 5. TẠO MÓN ĂN
    console.log('\n Tạo món ăn...');
    const mealsData = require('./mealsData');
    const meals = await Meal.insertMany(mealsData(ingredientIds));
    console.log(` Đã tạo ${meals.length} món ăn`);
    
    // 6. TẠO MEAL PLANS
    console.log('\n Tạo meal plans...');
    const today = new Date();
    let mealPlanCount = 0;
    
    for (const user of users) {
      for (let day = 0; day < 7; day++) {
        const date = new Date(today);
        date.setDate(date.getDate() + day);
        
        const breakfastMeals = meals.filter(m => m.mealType.includes('breakfast'));
        const lunchMeals = meals.filter(m => m.mealType.includes('lunch'));
        const dinnerMeals = meals.filter(m => m.mealType.includes('dinner'));
        
        await MealPlan.create({
          userId: user._id,
          date: date,
          breakfast: breakfastMeals[Math.floor(Math.random() * breakfastMeals.length)]?._id,
          lunch: lunchMeals[Math.floor(Math.random() * lunchMeals.length)]?._id,
          dinner: dinnerMeals[Math.floor(Math.random() * dinnerMeals.length)]?._id,
        });
        mealPlanCount++;
      }
    }
    console.log(` Đã tạo ${mealPlanCount} meal plans`);
    
    console.log('\n HOÀN THÀNH!');
    console.log(`\n Tổng kết:`);
    console.log(`    ${users.length} người dùng`);
    console.log(`    ${ingredients.length} nguyên liệu`);
    console.log(`    ${meals.length} món ăn`);
    console.log(`    ${mealPlanCount} kế hoạch bữa ăn`);
    console.log(`\n Thông tin đăng nhập:`);
    console.log(`   Email: nguyenvana@gmail.com`);
    console.log(`   Password: password123`);
    
  } catch (error) {
    console.error(' Lỗi:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n Đã đóng kết nối');
    process.exit(0);
  }
}

seedDatabase();
