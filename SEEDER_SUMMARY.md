# 📦 Tổng kết Database Seeder

## ✅ Đã hoàn thành

Tôi đã tạo một hệ thống seeder hoàn chỉnh cho backend của bạn với dữ liệu 100% tiếng Việt.

## 📁 Cấu trúc files

```
src/app/backend/seeders/
├── fullSeeder.js          # File chính để chạy seeder ⭐
├── ingredientsData.js     # 58 nguyên liệu Việt Nam
├── mealsData.js           # 40 món ăn Việt Nam
├── testSeeder.js          # Test dữ liệu
├── README.md              # Hướng dẫn chi tiết
└── QUICKSTART.md          # Hướng dẫn nhanh
```

## 📊 Dữ liệu được tạo

### 👤 Người dùng: 10 users
- Tất cả đã verify email
- Password: `password123`
- Có đầy đủ profile (BMI, BMR, TDEE, target calories)
- Có preferences (diet type, allergies, meals per day)

### 🥬 Nguyên liệu: 58 items
- **Rau củ** (18): Cà chua, Dưa chuột, Cải bắp, Cà rốt, Khoai tây, Hành tây, Tỏi, Rau muống, Rau cải, Súp lơ xanh, Bí đỏ, Đậu que, Ớt chuông, Nấm hương, Rau dền, Mồng tơi, Rau ngót...
- **Thịt** (7): Thịt gà, bò, heo, vịt, cừu, nạc vai, ba chỉ
- **Hải sản** (11): Cá hồi, thu, Tôm, Mực, Cua, Cá rô phi, trê, chép, ngừ, Nghêu, Sò
- **Trứng & Sữa** (5): Trứng gà, vịt, Sữa tươi, chua, Phô mai
- **Ngũ cốc** (8): Gạo trắng, lứt, Bún, Phở, Mì, Bánh mì, Yến mạch, Miến
- **Đậu** (4): Đậu phụ, đen, xanh, đỏ
- **Trái cây** (5): Chuối, Táo, Cam, Xoài, Dưa hấu

### 🍜 Món ăn: 40 món

**Món sáng (11 món):**
1. Phở bò
2. Bánh mì thịt
3. Bún bò Huế
4. Xôi gà
5. Cháo gà
6. Hủ tiếu Nam Vang
7. Bánh cuốn
8. Mì Quảng
9. Bánh bao
10. Cháo lòng
11. Phở gà

**Món trưa (19 món):**
1. Cơm gà xối mỡ
2. Cơm sườn
3. Bún chả
4. Cá kho tộ
5. Thịt kho tàu
6. Canh chua cá
7. Gà xào sả ớt
8. Bò lúc lắc
9. Tôm rim thịt
10. Rau muống xào tỏi
11. Đậu phụ sốt cà chua
12. Cơm chiên dương châu
13. Cá kho tiêu
14. Sườn xào chua ngọt
15. Cải xào nấm
16. Bún thịt nướng
17. Canh bí đỏ
18. Gà kho gừng
19. Mực xào sa tế

**Món tối (27 món):**
- Bao gồm tất cả món trưa + các món đặc biệt:
1. Lẩu thái
2. Bún riêu
3. Bánh xèo
4. Gỏi cuốn
5. Nem rán
6. Bún đậu mắm tôm
7. Cá chiên sốt cà
8. Súp bí đỏ
9. Mì xào hải sản
10. Cơm tấm sườn bì chả

**Món chay:** 4 món (Rau muống xào tỏi, Đậu phụ sốt cà chua, Cải xào nấm, Súp bí đỏ)

### 📅 Meal Plans: 70 plans
- 7 ngày cho mỗi user (10 users)
- Mỗi ngày có 3 bữa: sáng, trưa, tối
- Món ăn được chọn ngẫu nhiên phù hợp

## 🚀 Cách sử dụng

### 1. Kiểm tra dữ liệu
```bash
npm run test:seed
```

### 2. Chạy seeder
```bash
npm run seed
```

### 3. Khởi động backend
```bash
npm run backend
```

### 4. Test đăng nhập
```bash
curl -X POST http://localhost:9999/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"nguyenvana@gmail.com","password":"password123"}'
```

## 💡 Tài khoản test

| Email | Password | Giới tính | Mục tiêu |
|-------|----------|-----------|----------|
| nguyenvana@gmail.com | password123 | Nam | Duy trì |
| tranthib@gmail.com | password123 | Nữ | Giảm cân |
| levanc@gmail.com | password123 | Nam | Tăng cân |
| phamthid@gmail.com | password123 | Nữ | Duy trì |
| hoangvane@gmail.com | password123 | Nam | Tăng cân |
| vuthif@gmail.com | password123 | Nữ | Giảm cân |
| dangvang@gmail.com | password123 | Nam | Giảm cân |
| ngothih@gmail.com | password123 | Nữ | Duy trì |
| buivani@gmail.com | password123 | Nam | Duy trì |
| dothik@gmail.com | password123 | Nữ | Tăng cân |

## ✨ Đặc điểm nổi bật

✅ **Dữ liệu chính xác**
- Thông tin dinh dưỡng (calories, protein, carbs, fat) chính xác
- BMI, BMR, TDEE được tính toán tự động
- Phù hợp với người Việt Nam

✅ **Đa dạng**
- 40 món ăn phổ biến
- Hỗ trợ nhiều chế độ ăn (vegetarian, vegan, standard)
- Phù hợp với các bữa khác nhau

✅ **Dễ sử dụng**
- Chạy 1 lệnh: `npm run seed`
- Tự động xóa dữ liệu cũ
- Có test để kiểm tra

✅ **Hoàn chỉnh**
- Có hướng dẫn chi tiết (README.md)
- Có hướng dẫn nhanh (QUICKSTART.md)
- Có file test (testSeeder.js)

## 📝 Scripts đã thêm vào package.json

```json
{
  "scripts": {
    "seed": "node src/app/backend/seeders/fullSeeder.js",
    "test:seed": "node src/app/backend/seeders/testSeeder.js"
  }
}
```

## 🎯 Kết quả khi chạy seeder

```
✅ Kết nối MongoDB thành công
🗑️  Xóa dữ liệu cũ...
👤 Tạo người dùng...
✅ Đã tạo 10 người dùng
📊 Tạo profiles...
✅ Đã tạo 10 profiles
⚙️  Tạo preferences...
✅ Đã tạo 10 preferences
🥬 Tạo nguyên liệu...
✅ Đã tạo 58 nguyên liệu
🍜 Tạo món ăn...
✅ Đã tạo 40 món ăn
📅 Tạo meal plans...
✅ Đã tạo 70 meal plans

🎉 HOÀN THÀNH!

📊 Tổng kết:
   👤 10 người dùng
   🥬 58 nguyên liệu
   🍜 40 món ăn
   📅 70 kế hoạch bữa ăn

💡 Thông tin đăng nhập:
   Email: nguyenvana@gmail.com
   Password: password123

👋 Đã đóng kết nối
```

## 🔗 API Endpoints có thể test

1. **POST** `/api/auth/register` - Đăng ký
2. **POST** `/api/auth/login` - Đăng nhập
3. **POST** `/api/auth/verify-email` - Xác thực email
4. **GET** `/api/profile` - Lấy profile
5. **POST** `/api/profile` - Tạo profile
6. **PUT** `/api/profile` - Cập nhật profile
7. **GET** `/api/preferences` - Lấy preferences
8. **POST** `/api/preferences` - Tạo preferences
9. **GET** `/api/meal-plan?date=2026-02-03` - Lấy meal plan
10. **POST** `/api/meal-plan` - Tạo meal plan
11. **GET** `/api/ingredients` - Lấy danh sách nguyên liệu

## 📚 Tài liệu

- **README.md**: Hướng dẫn chi tiết đầy đủ
- **QUICKSTART.md**: Hướng dẫn nhanh 5 bước
- **testSeeder.js**: Test và kiểm tra dữ liệu

## 🎉 Hoàn thành!

Bạn có thể chạy `npm run seed` ngay bây giờ để tạo dữ liệu cho backend!

---

**Lưu ý:** Đảm bảo file `.env` có biến `MONGODB_URI` trước khi chạy seeder.
