// File test để kiểm tra dữ liệu seeder
const ingredientsData = require('./ingredientsData');
const mealsData = require('./mealsData');

console.log('KIỂM TRA DỮ LIỆU SEEDER\n');

// Test ingredients
console.log('NGUYÊN LIỆU:');
console.log(`   Tổng số: ${ingredientsData.length} nguyên liệu`);

const categories = {
  'Rau củ': 0,
  'Thịt': 0,
  'Hải sản': 0,
  'Trứng & Sữa': 0,
  'Ngũ cốc': 0,
  'Đậu': 0,
  'Trái cây': 0
};

ingredientsData.forEach(ing => {
  if (['Cà chua', 'Dưa chuột', 'Cải bắp', 'Cà rốt', 'Khoai tây', 'Hành tây', 'Tỏi', 'Rau muống', 'Rau cải', 'Súp lơ xanh', 'Bí đỏ', 'Đậu que', 'Ớt chuông', 'Nấm hương', 'Rau dền', 'Mồng tơi', 'Rau ngót'].includes(ing.name)) {
    categories['Rau củ']++;
  } else if (['Thịt gà', 'Thịt bò', 'Thịt heo', 'Thịt vịt', 'Thịt cừu', 'Thịt nạc vai', 'Thịt ba chỉ'].includes(ing.name)) {
    categories['Thịt']++;
  } else if (['Cá hồi', 'Cá thu', 'Tôm', 'Mực', 'Cua', 'Cá rô phi', 'Cá trê', 'Cá chép', 'Cá ngừ', 'Nghêu', 'Sò'].includes(ing.name)) {
    categories['Hải sản']++;
  } else if (['Trứng gà', 'Trứng vịt', 'Sữa tươi', 'Sữa chua', 'Phô mai'].includes(ing.name)) {
    categories['Trứng & Sữa']++;
  } else if (['Gạo trắng', 'Gạo lứt', 'Bún', 'Phở', 'Mì', 'Bánh mì', 'Yến mạch', 'Miến'].includes(ing.name)) {
    categories['Ngũ cốc']++;
  } else if (['Đậu phụ', 'Đậu đen', 'Đậu xanh', 'Đậu đỏ'].includes(ing.name)) {
    categories['Đậu']++;
  } else if (['Chuối', 'Táo', 'Cam', 'Xoài', 'Dưa hấu'].includes(ing.name)) {
    categories['Trái cây']++;
  }
});

Object.entries(categories).forEach(([cat, count]) => {
  console.log(`   - ${cat}: ${count}`);
});

// Test meals
console.log('\n MÓN ĂN:');

// Tạo ingredientIds giả để test
const ingredientIds = {};
ingredientsData.forEach(ing => {
  ingredientIds[ing.name] = 'test-id-' + ing.name;
});

const meals = mealsData(ingredientIds);
console.log(`   Tổng số: ${meals.length} món ăn`);

const mealsByType = {
  breakfast: 0,
  lunch: 0,
  dinner: 0
};

meals.forEach(meal => {
  if (meal.mealType.includes('breakfast')) mealsByType.breakfast++;
  if (meal.mealType.includes('lunch')) mealsByType.lunch++;
  if (meal.mealType.includes('dinner')) mealsByType.dinner++;
});

console.log(`   - Món sáng: ${mealsByType.breakfast}`);
console.log(`   - Món trưa: ${mealsByType.lunch}`);
console.log(`   - Món tối: ${mealsByType.dinner}`);

// Kiểm tra món chay
const vegetarianMeals = meals.filter(m => m.dietTypes.includes('vegetarian') || m.dietTypes.includes('vegan'));
console.log(`   - Món chay: ${vegetarianMeals.length}`);

// Kiểm tra dữ liệu hợp lệ
console.log('\n KIỂM TRA HỢP LỆ:');

let errors = 0;

// Kiểm tra ingredients
ingredientsData.forEach((ing, index) => {
  if (!ing.name || !ing.caloriesPer100g || !ing.unit) {
    console.log(`   Nguyên liệu ${index + 1} thiếu thông tin`);
    errors++;
  }
});

// Kiểm tra meals
meals.forEach((meal, index) => {
  if (!meal.name || !meal.mealType || !meal.ingredients || meal.ingredients.length === 0) {
    console.log(`    Món ăn ${index + 1} (${meal.name || 'unknown'}) thiếu thông tin`);
    errors++;
  }
  
  // Kiểm tra ingredients có tồn tại không
  meal.ingredients.forEach(ing => {
    if (!ing.ingredientId || ing.ingredientId.startsWith('test-id-undefined')) {
      console.log(`    Món "${meal.name}" có nguyên liệu không tồn tại`);
      errors++;
    }
  });
});

if (errors === 0) {
  console.log('    Tất cả dữ liệu hợp lệ!');
} else {
  console.log(`    Có ${errors} lỗi`);
}

console.log('\n HOÀN THÀNH KIỂM TRA!');
