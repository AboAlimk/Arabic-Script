<div dir="rtl">

# مكتبة السكربت العربي ع

مكتبة السكربت العربي هي مكتبة جافا سكربت كتبت باللغة العربية لتسهيل تطوير المواقع للمطورين العرب.

تضم المكتبة إمكانيات ضخمة تسهل عمل المطورين وتحتصر وقت عملهم.

لم يتم تطوير موقع خاص بالمكتبة حالياً لضيق الوقت ولكن سيتم بناء موقع خاص قريباً.

يمكنك أيضاً استخدام [السكربت العربي](#السكربت-العربي) لكتابة الكود كاملاً باللغة العربية


## مزايا السكربت العربي:


- **ع.هل_المتغير_مصفوفة** - إذا كان المتغير array
```js
ع.هل_المتغير_مصفوفة( المتغير );
النتيجة: true أو false
```

- **ع.هل_المتغير_مصفوفة_موضوعية** - إذا كان المتغير object
```js
ع.هل_المتغير_مصفوفة_موضوعية( المتغير );
النتيجة: true أو false
```

- **ع.هل_المتغير_عملية** - إذا كان المتغير function
```js
ع.هل_المتغير_عملية( المتغير );
النتيجة: true أو false
```

- **ع.هل_المتغير_رقم** - إذا كان المتغير رقم
```js
ع.هل_المتغير_رقم( المتغير );
النتيجة: true أو false
```

- **ع.جلب_الرقم** - إستخراج الرقم من النصوص
```js
ع.جلب_الرقم( المتغير );
النتيجة: رقم
```

- **ع.جلب_الرقم_مع_فواصل** - إستخراج الرقم مع الفواصل العشرية من النصوص
```js
ع.جلب_الرقم_مع_فواصل( المتغير );
النتيجة: رقم
```

- **ع.توليد_نص** - توليد نص عشوائي
```js
ع.توليد_نص( الحجم );
النتيجة: نص
```

- **ع.توليد_رقم** - توليد رقم عشوائي
```js
ع.توليد_رقم( الحجم );
النتيجة: رقم
```

- **ع.استبدال_الكل** - استبدال كل المطابقات في النصوص
```js
ع.استبدال_الكل( النص , البحث , الإستبدال );
```

- **ع.هل_المتغير_نافذة** - إذا كان المتغير window
```js
ع.هل_المتغير_نافذة( المتغير );
النتيجة: true أو false
```

- **ع.هل_المتغير_مستند** - إذا كان المتغير document
```js
ع.هل_المتغير_مستند( المتغير );
النتيجة: true أو false
```

- **ع.هل_المتغير_عنصر** - إذا كان المتغير عنصر HTML
```js
ع.هل_المتغير_عنصر( المتغير );
النتيجة: true أو false
```

- **ع.هل_المتغير_نص** - إذا كان المتغير نص
```js
ع.هل_المتغير_نص( المتغير );
النتيجة: true أو false
```

- **ع.هل_المتغير_لون** - إذا كان المتغير لون
```js
ع.هل_المتغير_لون( المتغير );
النتيجة: true أو false
```

- **ع.إحضار_قيم_اللون** - إحضار قيم rgb للون
```js
ع.إحضار_قيم_اللون( المتغير );
النتيجة: [0,0,0]
```

- **ع.تسلسل** - تحويل المصفوفة بنوعيها إلى نص متسلسل
```js
ع.تسلسل( المصفوفة );
النتيجة: نص
```

- **ع.هل_المتغير_جي_سون** - إذا كان المتغير json
```js
ع.هل_المتغير_جي_سون( المتغير );
النتيجة: true أو false
```

- **ع.تحويل_إلى_جي_سون** - تحويل النص إلى json
```js
ع.تحويل_إلى_جي_سون( النص );
النتيجة: مصفوفة json
```

- **ع.تحويل_إلى_اكس_ام_ال** - تحويل النص إلى xml
```js
ع.تحويل_إلى_اكس_ام_ال( النص );
النتيجة: مستند xml
```

- **ع.الوقت** - عملية الوقت للاستغناء عن جافا سكربت Date
```js
ع.الوقت( المطلوب );
ع.الوقت(); يتم إرجاع الوقت الكامل
ع.الوقت( نص ); يتم إرجاع المطلوب نص أو رقم
ع.الوقت( مصفوفة ); يتم إرجاع مصفوفة بالقيم المطلوبة
النصوص المسموحة: الثانية , الدقيقة , الساعة, رقم_اليوم , اسم_اليوم , رقم_الشهر , اسم_الشهر , السنة , الزمن_ميللي , الزمن_ثانية , الوقت
النتيجة لرقم الشهر ( 1 , 12 )
```

- **ع.تنبيه** - جافا سكربت alert
```js
ع.تنبيه( النص );
```

- **ع.تأكيد** - جافا سكربت confirm
```js
ع.تأكيد( النص );
```

- **ع.تنبيه_نص** - جافا سكربت prompt
```js
ع.تنبيه_نص( النص , القيمة );
النتيجة: نص
```

- **ع.طباعة** - جافا سكربت console.log
```js
ع.طباعة( النص );
```

- **ع.الهاش** - جلب أو تعديل location.hash
```js
ع.الهاش( [النص] );
تغيير الهاش إذا تم تعيين قيمة النص
جلب في حال تركها فارغة
```

- **ع.الرابط** - جلب أو تعديل location.href
```js
ع.الرابط( [النص] );تغيير الرابط إذا تم تعيين قيمة النص
جلب في حال تركها فارغة
```

- **ع.هل_التصفح_من_هاتف** - لمعرفة إذا كان التصفح من هاتف
```js
ع.هل_التصفح_من_هاتف();
النتيجة: true أو false
```

- **ع.كل** - تنفيذ عملية على كافة عناصر المصفوفة بنوعيها
```js
ع.كل( المصفوفة , function( الاسم , القيمة ){this});
this تنوب عن القيمة
```

- **ع.إضافة_حدث_مخصص** - إضافة حدث مخصص
```js
ع.إضافة_حدث_مخصص( الاسم , العملية );
```

- **ع.محاكاة_حدث_مخصص** - تشغيل الحدث المخصص
```js
ع.محاكاة_حدث_مخصص( العنصر , الحدث , البيانات );
```

--------------------------------------

- **ع( المطابقة )** - العملية الأساسية لجلب العناصر
```js
ع( نص );
ع( عنصر );
النتيجة مصفوفة تحوي عدة عناصر من ضمنها عنصر يسمى العناصر يحوي العناصر المطابقة
```


- **.استعداد()** - عملية التحميل الكامل للصفحة أو المستند
```js
ع(المستند).استعداد(العملية);
```

- **.إخفاء()** - إخفاء العنصر
```js
.إخفاء();
```

- **.إظهار()** - إظهار العنصر
```js
.إظهار();
```

- **.تبديل()** - تبديل إظهار أو إخفاء العنصر
```js
.تبديل();
```

- **.الشكل()** - جلب أو تعديل ستايل العنصر css
```js
.الشكل( نص ); إرجاع قيمة الخاصية
.الشكل( مصفوفة ); تغيير قيمة الخصائص
.الشكل( نص , نص  ); تغيير قيمة الخاصية
بمكن استخدام += , -= , *= , /= مع الأرقام
إذا لم يتم تعيين وحدة القياس الجديدة يتم إعتماد القديمة
يمكنك استخدام خصائص و قيم باللغة العربية
مثل: لون_الخلفية , اللون , الإرتفاع , أحمر , بكسل , 
```
[الوحدات المدعومة](#الوحدات-المدعومة)

[الوحدات التي يمكن كتابتها بالعربية](#الوحدات-التي-يمكن-كتابتها-بالعربية)

[الألوان التي يمكن كتابتها بالعربية](#الألوان-التي-يمكن-كتابتها-بالعربية)

[خصائص الستايل التي يمكن كتابتها بالعربية](#خصائص-الستايل-التي-يمكن-كتابتها-بالعربية)

- **.العرض()** - جلب أو تعديل عرض العنصر width
```js
.العرض(); إرجاع عرض العنصر
.العرض( رقم ); تغيير عرض العنصر
```

- **.الإرتفاع()** - جلب أو تعديل إرتفاع العنصر height
```js
.الإرتفاع(); إرجاع إرتفاع العنصر
.الإرتفاع( رقم ); تغيير إرتفاع العنصر
```

- **.العرض_الداخلي()**
```js
.العرض_الداخلي();
جلب عرض العنصر الداخلي ( width, padding-left, padding-right )
```

- **.العرض_الخارجي()**
```js
.العرض_الخارجي();
جلب عرض العنصر الخارجي ( width, padding-left, padding-right, border-left-width, border-right-width )
```

- **.الإرتفاع_الداخلي()**
```js
.الإرتفاع_الداخلي();
جلب إرتفاع العنصر الداخلي ( height, padding-top, padding-bottom )
```

- **.الإرتفاع_الخارجي()**
```js
.الإرتفاع_الخارجي();
جلب إرتفاع العنصر الخارجي ( height, padding-top, padding-bottom, border-top-width, border-bottom-width )
```

- **.مؤثرات()** - تغيير ستايل العنصر css مع مؤثرات
```js
.مؤثرات( القيم [, الوقت] [, صيغة_التأثير] [, العملية] );
القيم: مصفوفة object
الوقت: رقم أو القيمة الأساسية 500 ميللي ثانية
صيغة التأثير: نص من ضمن ضيغ المؤثرات
العملية: هي التي يتم تشغيلها بعد إنتهاء المؤثرات
تطبق المؤثرات على الخصائص التي تكون قيمتها رقم أو لون
باقي القيم يتم تغييرها فورا بدون مؤثرات
```
[صيغ المؤثرات](#صيغ-المؤثرات)

[الوحدات المدعومة](#الوحدات-المدعومة)

[الوحدات التي يمكن كتابتها بالعربية](#الوحدات-التي-يمكن-كتابتها-بالعربية)

[الألوان التي يمكن كتابتها بالعربية](#الألوان-التي-يمكن-كتابتها-بالعربية)

[خصائص الستايل التي يمكن كتابتها بالعربية](#خصائص-الستايل-التي-يمكن-كتابتها-بالعربية)

- **.تلاشي_إخفاء()**
```js
.تلاشي_إخفاء( [الوقت] );
إنقاص شفافية العنصر تدريجياً ثم إخفاؤه
```

- **.تلاشي_إظهار()**
```js
.تلاشي_إظهار( [الوقت] );
زيادة شفافية العنصر تدريجياً ثم إظهاره
```

- **.تبديل_تلاشي()**
```js
.تبديل_تلاشي( [الوقت] );
تبديل تلاشي_إخفاء و تلاشي_إظهار
```

- **.إنزلاق_للأعلى()**
```js
.إنزلاق_للأعلى( [الوقت] );
إخفاء العنصر تدريجياً بإنقاص الإرتفاع
```

- **.إنزلاق_للأسفل()**
```js
.إنزلاق_للأسفل( [الوقت] );
إظهار العنصر تدريجياً بزيادة الإرتفاع
```

- **.تبديل_الإنزلاق()**
```js
.تبديل_الإنزلاق( [الوقت] );
تبديل إنزلاق_للأعلى و إنزلاق_للأسفل
```

- **.إضافة_نمط()** - إضافة نمط للعنصر class
```js
.إضافة_نمط( نص );
.إضافة_نمط( عملية )
النص ممكن أن يحوي أكثر من نمط "class1 class2 ..."
```

- **.حذف_نمط()** - حذف نمط للعنصر class
```js
.حذف_نمط( نص );
.حذف_نمط( عملية )
النص ممكن أن يحوي أكثر من نمط "class1 class2 ..."
```

- **.تبديل_نمط()** - تبديل نمط للعنصر class
```js
.تبديل_نمط( نص );
.تبديل_نمط( عملية )
النص ممكن أن يحوي أكثر من نمط "class1 class2 ..."
```

- **.يملك_نمط()** - إذا كان العنصر يملك نمط class
```js
.يملك_نمط( نص );
النص ممكن أن يحوي أكثر من نمط "class1 class2 ..."
النتيجة: true أو false
```

- **.الإحداثيات()** - جلب إحداثيات العنصر ( top, left, bottom, right )
```js
.الإحداثيات();
النتيجة: مصفوفة {أعلى:رقم,يسار:رقم,أسفل:رقم,يمين:رقم}
```

- **.خصائص()** - جلب أو تعديل خصائص العنصر attributes
```js
.خصائص( الخاصية [, القيمة] [, أساسي] );
.خصائص( الخاصية ); جلب قيمة الخاصية
.خصائص( الخاصية, القيمة ); تغيير قيمة الخاصية
.خصائص( الخاصية , القيمة , أساسي ); تغيير قيمة الخاصية
أساسي تكون true , false في حال كانت الخاصية أساسية مثل ( disabled , readonly , required )
تستخدم لإلغاء أو تعطيل خاصية أساسية
```
[الخصائص التي يمكن كتابتها بالعربية](#الخصائص-التي-يمكن-كتابتها-بالعربية)

- **.حذف_خاصية()** - حذف خصائص العنصر الغير أساسية
```js
.حذف_خاصية( الخاصية );
```

- **.القيمة()** - جلب أو تعديل قيمة العنصر value
```js
.القيمة( [القيمة] );
```

- **.النص()** - جلب أو تعديل نص العنصر text
```js
.النص( [النص] );
```

- **.الكود()** - جلب أو تعديل كود العنصر html
```js
.الكود( [الكود] );
```

- **.العدد()** - جلب عدد العناصر
```js
.العدد();
تستخدم للتأكد من وجود عنصر
```

- **.جلب()** - جلب عنصر محدد من مجموعة العناصر
```js
.جلب( الرقم );
الرقم 0 يساوي العنصر الأول
```

- **.إفراغ()** - إفراغ محتويات العنصر
```js
.إفراغ();
```

- **.إزالة()** - حذف العناصر المحددة
```js
.إزالة( [المطابقة] );
.إزالة(); يتم حذف جميع العناصر
.إزالة( المطابقة ); يتم حذف العناصر المطابقة فقط
```

- **.السابق()** - جلب العنصر الذي يسبق العنصر الحالي
```js
.السابق( [المطابقة] );
.السابق(); جلب العنصر السابق مباشرة
.السابق( المطابقة ); جلب العنصر السابق إذا كان مطابق
```

- **.التالي()** - جلب العنصر الذي يلي العنصر الحالي
```js
.التالي( [المطابقة] );
.التالي(); جلب العنصر التالي مباشرة
.التالي( المطابقة ); جلب العنصر التالي إذا كان مطابق
```

- **.استبعاد()** - استبعاد عناصر محددة من مجموعة العناصر
```js
.استبعاد( المطابقة );
.استبعاد( نص ); استبعاد جميع العناصر المطابقة من مجموعة العناصر
.استبعاد( عنصر ); استبعاد العنصر المحدد من مجموعة العناصر
```

- **.ايجاد()** - ايجاد فروع العناصر المحددة
```js
.ايجاد( المطابقة );
.ايجاد( نص ); يتم إرجاع كافة العناصر المطابقة
.ايجاد( عنصر ); يتم إرجاع فقط العنصر المحدد
```

- **.الأصل()** - ايجاد العناصر الأصل للعناصر المحددة
```js
.الأصل( المطابقة );
.الأصل( نص ); يتم إرجاع كافة العناصر الأصل المطابقة
.الأصل( عنصر ); يتم إرجاع فقط العنصر الأصل المحدد
```

- **.الفروع()** - ايجاد فروع العناصر المحددة (الفروع المباشرة)
```js
.الفروع( المطابقة );
.الفروع( نص ); يتم إرجاع كافة العناصر الفروع المطابقة
.الفروع( عنصر ); يتم إرجاع فقط العنصر الفرع المحدد
```

- **.إضافة_فرع_بداية()** - إضافة فرع إلى بداية العنصر
```js
.إضافة_فرع_بداية( نص )
.إضافة_فرع_بداية( عنصر )
```

- **.إضافة_فرع_نهاية()** - إضافة فرع إلى نهاية العنصر
```js
.إضافة_فرع_نهاية( نص )
.إضافة_فرع_نهاية( عنصر )
```

- **.إستبدال()** - استبدال العناصر المحددة بأخرى
```js
.إستبدال( نص )
.إستبدال( عنصر )
```

- **.إدخال_قبل()** - إدخال عنصر قبل العنصر الحالي
```js
.إدخال_قبل( نص )
.إدخال_قبل( عنصر )
```

- **.إدخال_بعد()** - إدخال عنصر بعد العنصر الحالي
```js
.إدخال_بعد( نص )
.إدخال_بعد( عنصر )
```

- **.نسخ()** - نسخ العناصر المحددة
```js
.نسخ();
```

- **.إضافة_إلى_البداية()** - إضافة مجموعة العناصر المحددة إلى بداية عنصر
```js
.إضافة_إلى_البداية( المطابقة );
```

- **.إضافة_إلى_النهاية()** - إضافة مجموعة العناصر المحددة إلى نهاية عنصر
```js
.إضافة_إلى_النهاية( المطابقة );
```

- **.عند()** - لتشغيل أحداث معينة على العنصر
```js
.عند( الأحداث , العملية );
الأحداث: نص يمكن أن يحوي أكثر من حدث "click mouseup نقرة"
يتم قبول كافة الأحداث العربية والإنكليزية
```

- **.تعطيل_الأحداث()** - تعطيل حدث معين أو كافة أحداث العنصر
```js
.تعطيل_الأحداث( [الأحداث] );.تعطيل_الأحداث( الأحداث ); يتم تعطيل الأحداث المحددة، الأحداث: نص ممكن أن يحوي أكثر من حدث "click mouseup نقرة"
.تعطيل_الأحداث(); يتم تعطيل كافة أحداث العنصر
يتم قبول كافة الأحداث العربية والإنكليزية
```

- **.تفعيل_الأحداث()** - تفعيل حدث معين أو كافة أحداث العنصر
```js
.تفعيل_الأحداث( [الأحداث] );.تفعيل_الأحداث( الأحداث ); يتم تفعيل الأحداث المحددة، الأحداث: نص ممكن أن يحوي أكثر من حدث "click mouseup نقرة"
.تفعيل_الأحداث(); يتم تفعيل كافة أحداث العنصر
يتم قبول كافة الأحداث العربية والإنكليزية
```

- **.محاكاة_حدث()** - تشغيل حدث معين على العنصر
```js
.محاكاة_حدث( الحدث [, البيانات] );
الحدث: نص يحوي اسم الحدث ولا يمكن أن يكون أكثر من حدث
البيانات: مصفوفة تحوي بيانات تود إرفاقها مع الحدث
```

- **.حدث_قادم()** - تستخدم لتشغيل الأحداث على العناصر التي يتم إدراجها في الصفحة مستقبلاً
```js
.حدث_قادم( الأحداث , المطابقة , العملية );
الأحداث: نص ممكن أن يحوي أكثر من حدث "click mouseup نقرة"
المطابقة: نص يحوي العناصر المطابقة
يتم قبول كافة الأحداث العربية والإنكليزية
```

- **.الأول()** - جلب أول عنصر من مجموعة العناصر
```js
.الأول();
```

- **.الأخير()** - جلب آخر عنصر من مجموعة العناصر
```js
.الأخير();
```

- **.التمرير_العلوي()** - جلب أو تعديل قيمة التمرير العلوي للعنصر scollTop , pageYOffset
```js
.التمرير_العلوي( [القيمة] );
```

- **.التمرير_الجانبي()** جلب أو تعديل قيمة التمرير الجانبي للعنصر scollleft , pageXOffset
```js
.التمرير_الجانبي( [القيمة] );
```

- **.مؤثرات_التمرير()** - جلب أو تعديل قيمة التمرير الجانبي أو العلوي للعنصر 
```js
.مؤثرات_التمرير( النوع [, الوقت] [, العملية] );
النوع: مصفوفة {علوي:0} {جانبي:0}
الوقت: رقم، مدة التأثير
العملية: هي العملية التي يتم تشغيلها يعد إنتهاء المؤثر
```

- **.البيانات()** - جلب أو تعديل بيانات العنصر
```js
.البيانات( [الاسم] [, القيمة] );
.البيانات( الاسم , القيمة ); تعديل قيمة محددة من بيانات العنصر
.البيانات( الاسم ); جلب قيمة محددة من بيانات العنصر
.البيانات(); جلب كافة بيانات العنصر
```

- **.كل()** - تنفيد عملية على كافة العناصر المحددة
```js
.كل(function( الرقم , العنصر ){this});
this تنوب عن العنصر
```

- **.ربط_حدث()** - لتشغيل حدث معين على العنصر ولا يمكن تعطيل الحدث أو تخزين بيانات عنه
```js
.ربط_حدث( الأحداث , العملية );
الأحداث: نص ممكن أن يحوي أكثر من حدث "click mouseup نقرة"
الاستخدام الأساسي لهذه الميزة للمطورين من أجل إضافة أحداث مخصصة
يتم قبول كافة الأحداث العربية والإنكليزية
```

### الأحداث

- **.إرسال()** - submit
```js
.إرسال( العملية );
```

- **.فأرة_أسفل()** - mousedown
```js
.فأرة_أسفل( العملية );
```

- **.فأرة_دخول()** - mouseenter
```js
.فأرة_دخول( العملية );
```

- **.فأرة_مغادرة()** - mousemove
```js
.فأرة_مغادرة( العملية );
```

- **.فأرة_تحريك()** - mousemove
```js
.فأرة_تحريك( العملية );
```

- **.فأرة_خارج()** - mouseout
```js
.فأرة_خارج( العملية );
```

- **.فأرة_فوق()** - mouseover
```js
.فأرة_فوق( العملية );
```

- **.فأرة_أعلى()** - mouseup
```js
.فأرة_أعلى( العملية );
```

- **.مفتاح_أسفل()** - keydown
```js
.مفتاح_أسفل( العملية );
```

- **.مفتاح_ضفط()** - keypress
```js
.مفتاح_ضفط( العملية );
```

- **.مفتاح_أعلى()** - keyup
```js
.مفتاح_أعلى( العملية );
```

- **.تركيز()** - focus
```js
.تركيز( العملية );
```

- **.نقرة()** - click
```js
.نقرة( العملية );
```

- **.تغيير()** - change
```js
.تغيير( العملية );
```

- **.فقدان_التركيز()** - blur
```js
.فقدان_التركيز( العملية );
```

- **.نقرة_يمين()** - contextmenu
```js
.نقرة_يمين( العملية );
```

- **.نقرة_مزدوجة()** - dblclick
```js
.نقرة_مزدوجة( العملية );
```

- **.تمرير()** - scroll
```js
.تمرير( العملية );
```

- **.تغيير_الحجم()** - resize
```js
.تغيير_الحجم( العملية );
```

- **.أجاكس_قبل_الإرسال()** - يتم تشغيل العملية قبل إرسال طلب أجاكس
```js
.أجاكس_قبل_الإرسال( العملية );
```

- **.أجاكس_نجاح()** - يتم تشغيل العملية عند نجاح طلب أجاكس
```js
.أجاكس_نجاح( العملية );
```

- **.أجاكس_خطأ()** - يتم تشغيل العملية عند فشل طلب أجاكس
```js
.أجاكس_خطأ( العملية );
```

- **.أجاكس_إكتمال()** - يتم تشغيل العملية عند إكتمال طلب أجاكس بالنجاح أو الفشل
```js
.أجاكس_إكتمال( العملية );
```

- **.أجاكس_إنتهاء_المهلة()** - يتم تشغيل العملية عند إنتهاء مهلة طلب أجاكس
```js
.أجاكس_إنتهاء_المهلة( العملية );
```

- **.نقرة_مطولة()** - يتم تشغيل الحدث بعد النقر مع متابعة الضغط لمدة 400 ميللي ثانية
```js
.نقرة_مطولة( العملية );
```

- **.مرور_مطول()** - يتم تشغيل الحدث بعد المرور بالفأرة والثبات لمدة 400 ميللي ثانية 
```js
.مرور_مطول( العملية );
```

- **.نقرة_وسط()** - النقر بزر الفأرة الأوسط
```js
.نقرة_وسط( العملية );
```

### أجاكس

- **.ع.أجاكس()** - إرسال طلب XMLHTTPRequest
```js
.ع.أجاكس( الإعدادات );
الإعدادات: مصفوفة تحوي الإعدادات المطلوبة وهي:
الرابط (مطلوب)
نوع_الإرسال get , post (إختياري) | get
المزامنة - async - (إختياري) | true
اسم_المستخدم (إختياري)
كلمة_المرور (إختياري)
معالجة_البيانات - تحويل البيانات المرسلة إلى نص - (إختياري) | true
نوع_المدخلات (إختياري) | "application/x-www-form-urlencoded; charset=UTF-8"
البيانات - مصفوفة - (إختياري)
نوع_النتيجة xml,html,text,json (إختياري) | تحليل النوع
إعلان_الأحداث - للإعلان عن نتائج الطلب في الصفحة "أجاكس_نجاح , أجاكس_خطأ , أجاكس_إكتمال" (إختياري) | true
الترويسة - headers - (إختياري)
المهلة - مهلة الطلب قبل أن يتم إلغاؤه - (إختياري) | 0

قبل_الإرسال - يتم تشغيل العملية قبل إرسال الطلب - (إختياري)
function(){}

نجاح - يتم تشغيل العملية عند نجاح الطلب - (إختياري)
function( معلومات_الطلب , الرد ){}

خطأ - يتم تشغيل العملية عند فشل الطلب - (إختياري)
function( معلومات_الطلب , الرد , نص_الخطأ , رمز_الخطأ ){}

إكتمال - يتم تشغيل العملية عند إكتمال الطلب بالنجاح أو الفشل - (إختياري)
function( معلومات_الطلب , الرد ){}

إنتهاء_المهلة - يتم تشغيل العملية عند إنتهاء مهلة الطلب - (إختياري)
function( معلومات_الطلب , معلومات_الطلب ){}
```

في حال تم إدخال نوع بيانات محدد وكان نوع المخرجات مختلف يتم تشغيل العملية خطأ.

### أخطاء أجاكس

```js
1   لم يتم إدخال الرابط
2   الرابط غير موجود
3   نوع البيانات غير مدعوم
4   نوع البيانات مختلف
5   انتهاء مهلة الإتصال
```

### ع.بوست

```js
ع.بوست( الرابط [, البيانات] [, عملية_النجاح] );
تستخدم لإرسال طلب أجاكس نوع post
ويتم تحليل نوع المخرجات تلقائيا
```

### ع.جيت

```js
ع.جيت( الرابط [, البيانات] [, عملية_النجاح] );
تستخدم لإرسال طلب أجاكس نوع get
ويتم تحليل نوع المخرجات تلقائيا
```

### خصائص طلب أجاكس

( ع.أجاكس , ع.بوست , ع.جيت )

```js
.قبل_الإرسال(function(){})
.نجاح(function( معلومات_الطلب , الرد ){})
.خطأ(function( معلومات_الطلب , الرد , نص_الخطأ , رمز_الخطأ ){})
.إكتمال(function( معلومات_الطلب , الرد ){})
.إنتهاء_المهلة(function( معلومات_الطلب , معلومات_الطلب ){})
```

--------------------------------------

### صيغ المؤثرات

```js
easeInQuad
easeOutQuad
easeInOutQuad
easeInCubic
easeOutCubic
easeInOutCubic
easeInQuart
easeOutQuart
easeInOutQuart
easeInQuint
easeOutQuint
easeInOutQuint
easeInSine
easeOutSine
easeInOutSine
easeInExpo
easeOutExpo
easeInOutExpo
easeInCirc
easeOutCirc
easeInOutCirc
easeInElastic
easeOutElastic
easeInOutElastic
easeInBack
easeOutBack
easeInOutBack
easeInBounce
easeOutBounce
easeInOutBounce
```

--------------------------------------

### الوحدات المدعومة

```js
cm
mm
in
px
pt
pc
em
ex
%
```

### الوحدات التي يمكن كتابتها بالعربية

```js
px   بكسل
cm   سم
mm   مم
in   انش
pt   نقطة
pc   بيكاس
em   اي_ام
ex   اي_اكس
```

### الألوان التي يمكن كتابتها بالعربية

```js
Yellow   أصفر
White   أبيض
Silver   فضي
Red   أحمر
Purple   أرجواني
Pink   زهري
Orange   برتقالي
Olive   زيتوني
Green   أخضر
Grey   رمادي
Gold   ذهبي
Brown   بني
Blue   أزرق
Black   أسود
```

### خصائص الستايل التي يمكن كتابتها بالعربية

```js
background-color   لون_الخلفية
background-image   صورة_الخلفية
color   اللون
direction   الاتجاه
font-size   حجم_الخط
height   الإرتفاع
width   العرض
opacity   الشفافية
background-position   تموضع_الخلفية
border   الحد
right   يمين
left   يسار
top   أعلى
bottom   أسفل
cursor   المؤشر
display   طريقة_العرض
font-weight   سماكة_الخط
line-height   إرتفاع_السطر
margin   الهامش
padding   التباعد
overflow   أشرطة_التمرير
position   التموضع
text-align   تموضع_النص
```

### الخصائص التي يمكن كتابتها بالعربية

```js
disabled   معطل
title   العنوان
class   الأنماط
style   الشكل
required   مطلوب
readonly   للقراءة
```

### متغيرات يمكنك استخدامها في أي مكان من السكربت

```jsالنافذة				window
المستند   document
صحيح   true
خاطئ   false
غير_رقمي   NaN
لا_نهائي   Infinity
غير_معرف   undefined
بدون_قيمة   null
```

### أكواد عربية يمكن استخدامها عند البحث عن العناصر

يمكنك الفصل بين العناصر باستخدام ، أو ,

```js
:يحوي()   :contains()
:ليس()   :not()
:يملك()   :has()
:الأول   :first
:الأخير   :last
:زوجي   :even
:فردي   :odd
:مدخلات   :input
:نص   :text
:إختيار   :checkbox
:ملف   :file
:كلمة_مرور   :password
:إرسال   :submit
:صورة   :image
:إعادة_تعيين   :reset
:زر   :button
:ترويسة   :header
```

### معلومات الحدث

هي المعلومات التي يتم إرجاعها من كل الأحداث وتكون مصفوفة

```js
البيانات   :   {}
الحدث_الأساسي   :   معلومات الحدث الأساسي.
س   :   offsetX
ع   :   offsetY
الصفحة_س   :   pageX
الصفحة_ع   :   pageY
الشاشة_س   :   screenX
الشاشة_ع   :   screenY
العنصر   :   srcElement
الهدف   :   target
الوقت   :   timeStamp
المفتاح   :   which
عدد_مرات_التشغيل   :   رقم
محاكاة   :   true|false
نوع_الحدث   :   اسم الحدث
منع_المتابعة()   :   preventDefault()
```

### إضافة حدث مخصص

```js
ع.إضافة_حدث_مخصص( "إختبار" , function(){
   ع(المستند).نقرة(function(معلومات_الحدث){
      ع.محاكاة_حدث_مخصص( معلومات_الحدث.الهدف , "إختبار" , {بيانات_1:"أ",بيانات_2:"ب"} );
   });
});
```

--------------------------------------

# السكربت العربي

يمكنك السكربت العربي من كتابة أكواد الجافا سكربت باللغة العربية وتقوم مكتبة السكربت العربي بتحويلها إلى نص مقروء من قبل المتصفح.

السكربت العربي لا يدعم .استعداد() لأنه يتم تشغيل السكربت بعد تحميل الصفحة الكامل

```js
<arabicScript>
الكود العربي
</arabicScript>
```

**المتغيرات والرموز المدعومة**

```js
؛   -   ;
،   -   ,
إذا_كان   -   if
أو_إذا   -   else if
آخر   -   else
عملية   -   function
متغير   -   var
ثابت   -   const
إرجاع   -   return
من_أجل   -   for
مقاطعة   -   break
متابعة   -   continue
بينما   -   while
سويتش   -   switch
الحالة   -   case
إفتراضي   -   default
جديد   -   new
نوع   -   typeof
حذف   -   delete
هذا   -   this
```

**أمثلة**

```js
<arabicScript>
ع("#المعرف").نقرة(عملية(){
   ع.طباعة(هذا)؛
})؛
</arabicScript>
---------------
يتم تحويل الكود إلى
---------------
<script>
ع("#a1").نقرة(function(){
   ع.طباعة(this);
});
</script>
```

```js
<arabicScript>
متغير س=10؛
إذا_كان(س>10){
   ع.طباعة("أكبر")؛
}أو_إذا(س<10){
   ع.طباعة("أصغر")؛
}آخر{
   ع.طباعة("يساوي")؛
}
</arabicScript>
---------------
يتم تحويل الكود إلى
---------------
<script>
var س=10;
if(س>10){
   ع.طباعة("أكبر");
}else if(س<10){
   ع.طباعة("أصغر");
}else{
   ع.طباعة("يساوي");
}
</script>
```

```js
<arabicScript>
عملية إختبار1(أ،ب){
   إرجاع أ*ب؛
}
عملية إختبار2(أ){
   متغير ل؛
   سويتش(أ){
      الحالة 5:
         ل="اسم"؛
         مقاطعة؛
      الحالة 4:
         ل="جماد"؛
         مقاطعة؛
      الحالة 3:
         ل="نبات"؛
         مقاطعة؛
      إفتراضي:
         ل="خطأ"؛
   }
   إرجاع ل؛
}
</arabicScript>
---------------
يتم تحويل الكود إلى
---------------
<script>
function إختبار1(أ,ب){
   return أ*ب;
}
function إختبار2(أ){
   var ل;
   switch(أ){
      case 5:
         ل="اسم";
         break;
      case 4:
         ل="جماد";
         break;
      case 3:
         ل="نبات";
         break;
      default:
         ل="خطأ";
   }
   return ل;
}
</script>
```

### معلومات المكتبة

الملف الكامل: الحجم 166 كيلوبايت

الملف المصغر: 69 كيلوبايت

**المكتبة مفتوحة المصدر ويمكن للجميع تعديلها أو تطويرها**

</div>