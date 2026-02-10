// Dữ liệu món ăn Việt Nam
module.exports = (ingredientIds) => [
  // ===== MÓN SÁNG =====
  {
    name: 'Phở bò',
    mealType: ['breakfast'],
    ingredients: [
      { ingredientId: ingredientIds['Phở'], amount: 200 },
      { ingredientId: ingredientIds['Thịt bò'], amount: 100 },
      { ingredientId: ingredientIds['Hành tây'], amount: 30 },
      { ingredientId: ingredientIds['Rau cải'], amount: 50 },
    ],
    instructions: ['Luộc xương bò 3-4 giờ', 'Thái thịt bò mỏng', 'Trụng bánh phở', 'Xếp thịt lên phở', 'Chan nước dùng nóng'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/pho-bo.jpg'
  },
  {
    name: 'Bánh mì thịt',
    mealType: ['breakfast'],
    ingredients: [
      { ingredientId: ingredientIds['Bánh mì'], amount: 100 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 50 },
      { ingredientId: ingredientIds['Dưa chuột'], amount: 30 },
      { ingredientId: ingredientIds['Cà rốt'], amount: 20 },
    ],
    instructions: ['Nướng bánh mì', 'Chiên thịt', 'Cắt rau củ', 'Kẹp thịt và rau', 'Thêm tương ớt'],
    dietTypes: [],
    excludesAllergens: ['dairy'],
    imageUrl: '/images/meals/banh-mi.jpg'
  },
  {
    name: 'Bún bò Huế',
    mealType: ['breakfast'],
    ingredients: [
      { ingredientId: ingredientIds['Bún'], amount: 200 },
      { ingredientId: ingredientIds['Thịt bò'], amount: 80 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 50 },
      { ingredientId: ingredientIds['Rau cải'], amount: 40 },
    ],
    instructions: ['Nấu nước dùng cay', 'Luộc thịt', 'Trụng bún', 'Xếp thịt lên bún', 'Chan nước dùng'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/bun-bo-hue.jpg'
  },
  {
    name: 'Xôi gà',
    mealType: ['breakfast'],
    ingredients: [
      { ingredientId: ingredientIds['Gạo trắng'], amount: 150 },
      { ingredientId: ingredientIds['Thịt gà'], amount: 100 },
      { ingredientId: ingredientIds['Hành tây'], amount: 20 },
    ],
    instructions: ['Ngâm gạo nếp', 'Hấp xôi', 'Luộc gà xé nhỏ', 'Phi hành', 'Xếp gà lên xôi'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/xoi-ga.jpg'
  },
  {
    name: 'Cháo gà',
    mealType: ['breakfast'],
    ingredients: [
      { ingredientId: ingredientIds['Gạo trắng'], amount: 80 },
      { ingredientId: ingredientIds['Thịt gà'], amount: 100 },
      { ingredientId: ingredientIds['Tỏi'], amount: 10 },
      { ingredientId: ingredientIds['Rau cải'], amount: 30 },
    ],
    instructions: ['Nấu cháo gạo', 'Luộc gà xé sợi', 'Phi tỏi', 'Cho gà vào cháo', 'Thêm rau thơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/chao-ga.jpg'
  },
  {
    name: 'Hủ tiếu Nam Vang',
    mealType: ['breakfast'],
    ingredients: [
      { ingredientId: ingredientIds['Bún'], amount: 200 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 80 },
      { ingredientId: ingredientIds['Tôm'], amount: 50 },
      { ingredientId: ingredientIds['Rau cải'], amount: 40 },
    ],
    instructions: ['Nấu nước dùng', 'Luộc thịt và tôm', 'Trụng hủ tiếu', 'Xếp topping', 'Chan nước dùng'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/hu-tieu.jpg'
  },
  {
    name: 'Bánh cuốn',
    mealType: ['breakfast'],
    ingredients: [
      { ingredientId: ingredientIds['Gạo trắng'], amount: 150 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 80 },
      { ingredientId: ingredientIds['Nấm hương'], amount: 30 },
      { ingredientId: ingredientIds['Hành tây'], amount: 20 },
    ],
    instructions: ['Xay bột gạo', 'Tráng bánh', 'Xào nhân thịt nấm', 'Cuốn bánh', 'Chấm nước mắm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/banh-cuon.jpg'
  },
  {
    name: 'Mì Quảng',
    mealType: ['breakfast'],
    ingredients: [
      { ingredientId: ingredientIds['Mì'], amount: 200 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 80 },
      { ingredientId: ingredientIds['Tôm'], amount: 50 },
      { ingredientId: ingredientIds['Rau cải'], amount: 40 },
    ],
    instructions: ['Nấu nước dùng đặc', 'Luộc thịt và tôm', 'Trụng mì', 'Xếp topping', 'Chan nước dùng ít'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/mi-quang.jpg'
  },
  {
    name: 'Bánh bao',
    mealType: ['breakfast'],
    ingredients: [
      { ingredientId: ingredientIds['Bánh mì'], amount: 120 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 60 },
      { ingredientId: ingredientIds['Trứng gà'], amount: 50 },
      { ingredientId: ingredientIds['Nấm hương'], amount: 20 },
    ],
    instructions: ['Nhào bột', 'Làm nhân thịt', 'Gói bánh', 'Hấp bánh', 'Ăn nóng'],
    dietTypes: [],
    excludesAllergens: ['dairy'],
    imageUrl: '/images/meals/banh-bao.jpg'
  },
  {
    name: 'Cháo lòng',
    mealType: ['breakfast'],
    ingredients: [
      { ingredientId: ingredientIds['Gạo trắng'], amount: 80 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 100 },
      { ingredientId: ingredientIds['Tỏi'], amount: 10 },
      { ingredientId: ingredientIds['Rau cải'], amount: 30 },
    ],
    instructions: ['Nấu cháo', 'Luộc lòng heo', 'Phi tỏi', 'Cho lòng vào cháo', 'Thêm rau thơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/chao-long.jpg'
  },
  
  // ===== MÓN TRƯA =====
  {
    name: 'Cơm gà xối mỡ',
    mealType: ['lunch'],
    ingredients: [
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
      { ingredientId: ingredientIds['Thịt gà'], amount: 150 },
      { ingredientId: ingredientIds['Dưa chuột'], amount: 50 },
      { ingredientId: ingredientIds['Cà chua'], amount: 40 },
    ],
    instructions: ['Nấu cơm', 'Luộc gà', 'Xé gà', 'Làm nước mắm gừng', 'Xếp gà lên cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/com-ga.jpg'
  },
  {
    name: 'Cơm sườn',
    mealType: ['lunch'],
    ingredients: [
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 150 },
      { ingredientId: ingredientIds['Trứng gà'], amount: 50 },
      { ingredientId: ingredientIds['Dưa chuột'], amount: 40 },
    ],
    instructions: ['Nấu cơm', 'Ướp sườn', 'Nướng sườn', 'Chiên trứng', 'Xếp sườn lên cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/com-suon.jpg'
  },
  {
    name: 'Bún chả',
    mealType: ['lunch'],
    ingredients: [
      { ingredientId: ingredientIds['Bún'], amount: 200 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 120 },
      { ingredientId: ingredientIds['Rau cải'], amount: 50 },
      { ingredientId: ingredientIds['Dưa chuột'], amount: 30 },
    ],
    instructions: ['Ướp thịt', 'Nướng chả', 'Trụng bún', 'Làm nước mắm chua ngọt', 'Xếp chả và bún'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/bun-cha.jpg'
  },
  {
    name: 'Cá kho tộ',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Cá rô phi'], amount: 200 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
      { ingredientId: ingredientIds['Tỏi'], amount: 15 },
      { ingredientId: ingredientIds['Ớt chuông'], amount: 30 },
    ],
    instructions: ['Ướp cá', 'Kho cá với nước dừa', 'Nấu cơm', 'Ăn kèm cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/ca-kho.jpg'
  },
  {
    name: 'Thịt kho tàu',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Thịt heo'], amount: 200 },
      { ingredientId: ingredientIds['Trứng gà'], amount: 100 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
      { ingredientId: ingredientIds['Tỏi'], amount: 10 },
    ],
    instructions: ['Luộc trứng', 'Kho thịt với nước dừa', 'Nấu cơm', 'Ăn kèm cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/thit-kho.jpg'
  },
  {
    name: 'Canh chua cá',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Cá trê'], amount: 200 },
      { ingredientId: ingredientIds['Cà chua'], amount: 80 },
      { ingredientId: ingredientIds['Bí đỏ'], amount: 100 },
      { ingredientId: ingredientIds['Rau muống'], amount: 50 },
    ],
    instructions: ['Nấu nước dùng chua', 'Cho cá vào nấu', 'Thêm rau củ', 'Nêm nếm', 'Ăn kèm cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/canh-chua.jpg'
  },
  {
    name: 'Gà xào sả ớt',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Thịt gà'], amount: 200 },
      { ingredientId: ingredientIds['Ớt chuông'], amount: 50 },
      { ingredientId: ingredientIds['Hành tây'], amount: 40 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
    ],
    instructions: ['Ướp gà', 'Xào gà với sả ớt', 'Nấu cơm', 'Ăn kèm cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/ga-xao-sa.jpg'
  },
  {
    name: 'Bò lúc lắc',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Thịt bò'], amount: 200 },
      { ingredientId: ingredientIds['Khoai tây'], amount: 100 },
      { ingredientId: ingredientIds['Hành tây'], amount: 40 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
    ],
    instructions: ['Ướp bò', 'Chiên khoai tây', 'Xào bò', 'Nấu cơm', 'Ăn kèm cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/bo-luc-lac.jpg'
  },
  {
    name: 'Tôm rim thịt',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Tôm'], amount: 150 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 100 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
      { ingredientId: ingredientIds['Tỏi'], amount: 10 },
    ],
    instructions: ['Ướp tôm và thịt', 'Rim với nước dừa', 'Nấu cơm', 'Ăn kèm cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/tom-rim.jpg'
  },
  {
    name: 'Rau muống xào tỏi',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Rau muống'], amount: 200 },
      { ingredientId: ingredientIds['Tỏi'], amount: 15 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
    ],
    instructions: ['Nhặt rau', 'Phi tỏi', 'Xào rau', 'Nấu cơm', 'Ăn kèm cơm'],
    dietTypes: ['vegetarian', 'vegan'],
    excludesAllergens: ['dairy', 'nuts', 'eggs'],
    imageUrl: '/images/meals/rau-muong-xao.jpg'
  },
  {
    name: 'Đậu phụ sốt cà chua',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Đậu phụ'], amount: 200 },
      { ingredientId: ingredientIds['Cà chua'], amount: 100 },
      { ingredientId: ingredientIds['Hành tây'], amount: 40 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
    ],
    instructions: ['Chiên đậu phụ', 'Nấu sốt cà chua', 'Trộn đậu với sốt', 'Nấu cơm', 'Ăn kèm cơm'],
    dietTypes: ['vegetarian', 'vegan'],
    excludesAllergens: ['dairy', 'nuts', 'eggs'],
    imageUrl: '/images/meals/dau-phu-sot.jpg'
  },
  {
    name: 'Cơm chiên dương châu',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
      { ingredientId: ingredientIds['Tôm'], amount: 80 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 60 },
      { ingredientId: ingredientIds['Trứng gà'], amount: 50 },
    ],
    instructions: ['Nấu cơm nguội', 'Xào tôm thịt', 'Chiên trứng', 'Chiên cơm', 'Trộn đều'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/com-chien.jpg'
  },
  {
    name: 'Cá kho tiêu',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Cá thu'], amount: 200 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
      { ingredientId: ingredientIds['Tỏi'], amount: 15 },
      { ingredientId: ingredientIds['Hành tây'], amount: 30 },
    ],
    instructions: ['Ướp cá', 'Kho cá với tiêu', 'Nấu cơm', 'Ăn kèm cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/ca-kho-tieu.jpg'
  },
  {
    name: 'Sườn xào chua ngọt',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Thịt heo'], amount: 200 },
      { ingredientId: ingredientIds['Ớt chuông'], amount: 60 },
      { ingredientId: ingredientIds['Cà chua'], amount: 50 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
    ],
    instructions: ['Ướp sườn', 'Chiên sườn', 'Làm sốt chua ngọt', 'Xào sườn với sốt', 'Ăn kèm cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/suon-xao.jpg'
  },
  {
    name: 'Cải xào nấm',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Cải bắp'], amount: 200 },
      { ingredientId: ingredientIds['Nấm hương'], amount: 100 },
      { ingredientId: ingredientIds['Tỏi'], amount: 10 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
    ],
    instructions: ['Rửa rau', 'Phi tỏi', 'Xào nấm', 'Xào cải', 'Ăn kèm cơm'],
    dietTypes: ['vegetarian', 'vegan'],
    excludesAllergens: ['dairy', 'nuts', 'eggs'],
    imageUrl: '/images/meals/cai-xao-nam.jpg'
  },
  
  // ===== MÓN TỐI =====
  {
    name: 'Lẩu thái',
    mealType: ['dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Tôm'], amount: 150 },
      { ingredientId: ingredientIds['Mực'], amount: 100 },
      { ingredientId: ingredientIds['Nấm hương'], amount: 80 },
      { ingredientId: ingredientIds['Rau cải'], amount: 100 },
    ],
    instructions: ['Nấu nước lẩu chua cay', 'Chuẩn bị hải sản', 'Rửa rau', 'Nhúng lẩu', 'Ăn kèm bún'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/lau-thai.jpg'
  },
  {
    name: 'Bún riêu',
    mealType: ['dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Bún'], amount: 200 },
      { ingredientId: ingredientIds['Cua'], amount: 100 },
      { ingredientId: ingredientIds['Đậu phụ'], amount: 80 },
      { ingredientId: ingredientIds['Cà chua'], amount: 60 },
    ],
    instructions: ['Nấu nước dùng riêu', 'Làm riêu cua', 'Trụng bún', 'Xếp topping', 'Chan nước dùng'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/bun-rieu.jpg'
  },
  {
    name: 'Bánh xèo',
    mealType: ['dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Gạo trắng'], amount: 150 },
      { ingredientId: ingredientIds['Tôm'], amount: 100 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 80 },
      { ingredientId: ingredientIds['Rau cải'], amount: 100 },
    ],
    instructions: ['Pha bột bánh xèo', 'Xào nhân', 'Tráng bánh', 'Gấp bánh', 'Ăn kèm rau sống'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/banh-xeo.jpg'
  },
  {
    name: 'Gỏi cuốn',
    mealType: ['dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Bún'], amount: 100 },
      { ingredientId: ingredientIds['Tôm'], amount: 150 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 80 },
      { ingredientId: ingredientIds['Rau cải'], amount: 80 },
    ],
    instructions: ['Luộc tôm thịt', 'Trụng bún', 'Chuẩn bị rau', 'Cuốn gỏi', 'Chấm tương'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/goi-cuon.jpg'
  },
  {
    name: 'Nem rán',
    mealType: ['dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Thịt heo'], amount: 150 },
      { ingredientId: ingredientIds['Tôm'], amount: 80 },
      { ingredientId: ingredientIds['Nấm hương'], amount: 40 },
      { ingredientId: ingredientIds['Cà rốt'], amount: 40 },
    ],
    instructions: ['Làm nhân nem', 'Gói nem', 'Chiên nem', 'Ăn kèm rau sống', 'Chấm nước mắm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/nem-ran.jpg'
  },
  {
    name: 'Bún đậu mắm tôm',
    mealType: ['dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Bún'], amount: 200 },
      { ingredientId: ingredientIds['Đậu phụ'], amount: 150 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 100 },
      { ingredientId: ingredientIds['Rau cải'], amount: 80 },
    ],
    instructions: ['Chiên đậu phụ', 'Luộc thịt', 'Trụng bún', 'Chuẩn bị rau', 'Chấm mắm tôm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/bun-dau.jpg'
  },
  {
    name: 'Cá chiên sốt cà',
    mealType: ['dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Cá rô phi'], amount: 200 },
      { ingredientId: ingredientIds['Cà chua'], amount: 100 },
      { ingredientId: ingredientIds['Hành tây'], amount: 40 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
    ],
    instructions: ['Chiên cá', 'Nấu sốt cà chua', 'Rưới sốt lên cá', 'Nấu cơm', 'Ăn kèm cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/ca-chien-sot.jpg'
  },
  {
    name: 'Súp bí đỏ',
    mealType: ['dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Bí đỏ'], amount: 300 },
      { ingredientId: ingredientIds['Sữa tươi'], amount: 100 },
      { ingredientId: ingredientIds['Hành tây'], amount: 40 },
      { ingredientId: ingredientIds['Bánh mì'], amount: 50 },
    ],
    instructions: ['Hấp bí đỏ', 'Xay nhuyễn', 'Nấu với sữa', 'Nêm nếm', 'Ăn kèm bánh mì'],
    dietTypes: ['vegetarian'],
    excludesAllergens: ['nuts'],
    imageUrl: '/images/meals/sup-bi-do.jpg'
  },
  {
    name: 'Mì xào hải sản',
    mealType: ['dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Mì'], amount: 200 },
      { ingredientId: ingredientIds['Tôm'], amount: 100 },
      { ingredientId: ingredientIds['Mực'], amount: 80 },
      { ingredientId: ingredientIds['Rau cải'], amount: 60 },
    ],
    instructions: ['Luộc mì', 'Xào hải sản', 'Xào mì với hải sản', 'Thêm rau', 'Nêm nếm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/mi-xao.jpg'
  },
  {
    name: 'Cơm tấm sườn bì chả',
    mealType: ['dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 150 },
      { ingredientId: ingredientIds['Trứng gà'], amount: 50 },
      { ingredientId: ingredientIds['Dưa chuột'], amount: 40 },
    ],
    instructions: ['Nấu cơm tấm', 'Nướng sườn', 'Làm bì', 'Chiên trứng', 'Xếp topping lên cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/com-tam.jpg'
  },
  {
    name: 'Phở gà',
    mealType: ['breakfast', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Phở'], amount: 200 },
      { ingredientId: ingredientIds['Thịt gà'], amount: 150 },
      { ingredientId: ingredientIds['Hành tây'], amount: 30 },
      { ingredientId: ingredientIds['Rau cải'], amount: 50 },
    ],
    instructions: ['Luộc gà lấy nước dùng', 'Xé gà', 'Trụng bánh phở', 'Xếp gà lên phở', 'Chan nước dùng'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/pho-ga.jpg'
  },
  {
    name: 'Bún thịt nướng',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Bún'], amount: 200 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 150 },
      { ingredientId: ingredientIds['Rau cải'], amount: 80 },
      { ingredientId: ingredientIds['Dưa chuột'], amount: 40 },
    ],
    instructions: ['Ướp thịt', 'Nướng thịt', 'Trụng bún', 'Xếp thịt lên bún', 'Rưới nước mắm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/bun-thit-nuong.jpg'
  },
  {
    name: 'Canh bí đỏ',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Bí đỏ'], amount: 200 },
      { ingredientId: ingredientIds['Thịt heo'], amount: 80 },
      { ingredientId: ingredientIds['Tôm'], amount: 50 },
      { ingredientId: ingredientIds['Rau cải'], amount: 40 },
    ],
    instructions: ['Nấu nước dùng', 'Cho bí đỏ vào nấu', 'Thêm thịt tôm', 'Nêm nếm', 'Ăn kèm cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/canh-bi-do.jpg'
  },
  {
    name: 'Gà kho gừng',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Thịt gà'], amount: 200 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
      { ingredientId: ingredientIds['Tỏi'], amount: 15 },
      { ingredientId: ingredientIds['Hành tây'], amount: 30 },
    ],
    instructions: ['Ướp gà', 'Kho gà với gừng', 'Nấu cơm', 'Ăn kèm cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/ga-kho-gung.jpg'
  },
  {
    name: 'Mực xào sa tế',
    mealType: ['lunch', 'dinner'],
    ingredients: [
      { ingredientId: ingredientIds['Mực'], amount: 200 },
      { ingredientId: ingredientIds['Ớt chuông'], amount: 60 },
      { ingredientId: ingredientIds['Hành tây'], amount: 40 },
      { ingredientId: ingredientIds['Gạo trắng'], amount: 200 },
    ],
    instructions: ['Sơ chế mực', 'Xào mực với sa tế', 'Thêm rau củ', 'Nấu cơm', 'Ăn kèm cơm'],
    dietTypes: [],
    excludesAllergens: ['dairy', 'nuts'],
    imageUrl: '/images/meals/muc-xao-sa-te.jpg'
  },
];

