// let i = 1;
//     for(let li of document.querySelectorAll('.clients__item')) {
//       li.style.position = 'relative';
//       li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//       i++;
//     }

//     /* конфигурация */
//     let width = 400; // ширина картинки
//     let count = 2; // видимое количество изображений

//     let list = document.querySelector('clients__menu');
//     let listElems = document.querySelectorAll('.clients__item');

//     let position = 0; // положение ленты прокрутки

//     document.querySelector('.prev').onclick = function() {
//       // сдвиг влево
//       position += width * count;
//       // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//       position = Math.min(position, 0)
//       list.style.marginLeft = position + 'px';
//     };

//     document.querySelector('.next').onclick = function() {
//       // сдвиг вправо
//       position -= width * count;
//       // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//       position = Math.max(position, -width * (listElems.length - count));
//       list.style.marginLeft = position + 'px';
//     };