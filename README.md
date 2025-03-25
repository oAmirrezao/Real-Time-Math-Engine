# ماشین حساب داینامیک فرمول‌های ریاضی

![پیشنمایش پروژه](preview.jpg)

## 📝 فهرست مطالب
- [مقدمه](#-مقدمه)
- [ویژگی‌های کلیدی](#-ویژگی‌های-کلیدی)
- [فناوری‌های استفاده شده](#-فناوری‌های-استفاده-شده)
- [نصب و راه‌اندازی](#-نصب-و-راهاندازی)
- [ساختار پروژه](#-ساختار-پروژه)
- [اجزای اصلی](#-اجزای-اصلی)
- [نحوه استفاده](#-نحوه-استفاده)
- [تست Responsive](#-تست-responsive)

## 🚀 مقدمه
این پروژه یک ماشین حساب تعاملی مبتنی بر وب است که به کاربران امکان می‌دهد مقادیر عددی را وارد کنند و نتایج فرمول‌های ریاضی را به صورت بلادرنگ مشاهده کنند. این سیستم از سه فرمول مختلف پشتیبانی می‌کند و رابط کاربری واکنش‌گرا دارد.

## ✨ ویژگی‌های کلیدی
- محاسبات بلادرنگ با تغییر مقادیر ورودی
- نمایش زیبای فرمول‌ها با هایلایت متغیرها
- طراحی واکنش‌گرا برای همه دستگاه‌ها
- سیستم نمایش خطا برای فرمول‌های نامعتبر
- انیمیشن‌های ظریف برای تجربه کاربری بهتر

## 🔧 فناوری‌های استفاده شده
- **HTML5** برای ساختار صفحه
- **CSS3** با Flexbox/Grid برای طراحی
- **JavaScript (ES6)** برای منطق محاسبات
- **Font Awesome** برای آیکون‌ها
- **Google Fonts** برای تایپوگرافی

## 📥 نصب و راه‌اندازی
1. ریپازیتوری را کلون کنید:
```bash
git clone https://github.com/yourusername/dynamic-formula-calculator.git

وارد پوشه پروژه شوید:
cd dynamic-formula-calculator

فایل index.html را در مرورگر باز کنید.
📁 ساختار پروژه
├── index.html        # ساختار اصلی صفحه
├── styles.css       # استایل‌های CSS
├── script.js        # منطق محاسبات
└── README.md        # مستندات پروژه
🧩 اجزای اصلی
1. کلاس FormulaEvaluator (JavaScript)
مسئولیت: مدیریت منطق محاسبات

متدهای کلیدی:

getValues(): دریافت مقادیر از فیلدهای ورودی

evaluateFormula(): ارزیابی فرمول و نمایش نتیجه

initialize(): راه‌اندازی ایونت لیسنرها

2. طراحی واکنش‌گرا (CSS)
استفاده از Media Queries برای دستگاه‌های مختلف

سیستم Grid برای چیدمان انعطاف‌پذیر

ترنزیشن‌های نرم برای عناصر تعاملی

3. ساختار HTML
گروه‌بندی مستقل هر فرمول

تگ‌های معنایی برای دسترسی‌پذیری

ویژگی data-formula برای ذخیره فرمول‌ها

💻 نحوه استفاده
مقادیر را در فیلدهای ورودی وارد کنید:

قیمت واحد (Price per unit)

تعداد (Quantity)

تخفیف (Discount)

نتیجه به صورت خودکار محاسبه و نمایش داده می‌شود

مثال:
قیمت واحد = 20
تعداد = 4
تخفیف = 30
نتیجه = 20 * 4 - 30 = 50

📱 تست Responsive
در مرورگر Chrome:

کلید F12 را بزنید

آیکون Device Toolbar (📱) را انتخاب کنید

دستگاه مورد نظر را از لیست انتخاب یا اندازه دلخواه تنظیم کنید

رفتارهای کلیدی:

تبدیل چیدمان افقی به عمودی در موبایل

تنظیم خودکار اندازه فونت‌ها

حفظ خوانایی در اندازه‌های کوچک

📄 لیسانس
این پروژه تحت لیسانس MIT منتشر شده است.

### نکات نهایی برای کپی‌پیست بدون مشکل:
1. تمام هدرها با سینتکس صحیح Markdown (#) نوشته شده‌اند
2. کدها در بلاک‌های جداگانه با backtick مشخص شده‌اند
3. از کاراکترهای یونیکد فارسی استفاده شده است
4. ساختار سلسله مراتبی به درستی رعایت شده
5. فاصله‌گذاری و ترازبندی متناسب با استانداردهای GitHub

این فایل را با نام `README.md` در ریشه ریپازیتوری ذخیره کنید.
