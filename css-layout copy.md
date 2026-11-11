# CSS-layout / 1-р шат

Зохиогч: Б. Зөнсод | Огноо: 2026.11.11 | Үе шат: 1

## Гол 3 Концепц

1. Flexbox - нэг чиглэлд мөр эсвэл баганан байдлаар элементүүдийг жагсааж, зай тааруулахад ашиглана. Navigation, товчны бүлэг зэрэгт тохиромжтой. Grid - мөр, баганатай хүснэгт хэлбэрийн layout хийхэд ашиглана. Card gallery-д тохиромжтой. Media query - responsive design хийхэд ашиглана. Дэлгэцийн өргөнөөс хамаарч өөр CSS ажиллуулна.
2. Анхаарах зүйлс:
   `position` тохируулж өгсөн үед л left, right, top, bottom ажиллана.
   `<ul>`, `<body>`, `<p>` зэрэг элемент browser-ийн өгөгдмөл margin, padding-тай байдаг. DevTools-с харвал өөрөө өгөөгүй мөртлөө зай гарвал margin, padding-г 0 болгох хэрэгтэй.
   `<button>`, `<input>` нь фонтоо дээд элементээсээ удамшуулдаггүй тул font: inherit өгнө.

## Анхаарах Зүйлс

CSS бичиж spacing хийхдээ % ашиглах нь responsive байдлыг бүрдүүлэхэд хялбар байдаг.

Дэлгэцийн бүтэн өргөнийг авахдаа `width: 100%` гэж өгөхөөс илүү `position` өгчихөөд left: 0; right: 0 гэж бичих нь амар. Учир нь width: 100%-тай байхад margin, padding-аа бас %-р өгвөл нийт өргөн нь дэлгэцээс илүү гарч хальдаг. left: 0; right: 0 өгвөл зүүн, баруун хоёр захад наагдаж, өргөн нь өөрөө тохирно.

## Хэрэгцээт Эх Сурвалжууд

- https://css-tricks.com/snippets/css/a-guide-to-flexbox/ - property бүрийг зурагтай тайлбарласан тул justify-content, align-items-н ялгааг хурдан ойлгоход тусална.
- https://css-tricks.com/snippets/css/complete-guide-grid/ - `grid-template-columns`, `span`, `auto-fit` зэргийг ойлгоно.
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
