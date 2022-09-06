(()=>{"use strict";var e={};function t(){ymaps.ready(()=>{let o=new ymaps.Map("map",{center:[55.76,37.65],zoom:15,controls:["typeSelector","zoomControl"],zoom:12},{balloonMaxWidth:353,balloonMaxHeight:501,searchControlProvider:"yandex#search"});o.events.add("click",function(e){let t=e.get("coords");console.log(t);n(o,t,[])});a=new ymaps.Clusterer({clusterDisableClickZoom:true});a.options.set("hasBalloon",false);i(o);a.events.add("click",function(e){let t=e.get("target").getGeoObjects();console.log(t);n(o,e.get("coords"),t)})});let a;function s(){const e=localStorage.reviews;return JSON.parse(e||"[]")}function t(e){let t="";for(const o of s()){if(e.some(e=>JSON.stringify(e.geometry._coordinates)===JSON.stringify(o.coords))){t+=`
                <div class='review'>
                <div class='review__info'>
                <div class='review__author'>${o.author}</div>
                <div class='review__place'>${o.place}</div>
                </div>
                <div class='review__text'>${o.reviewText}</div>
                </div>
                `}}return t}function i(t){const e=[];for(const o of s()){const r=new ymaps.Placemark(o.coords);r.events.add("click",e=>{e.stopPropagation();n(t,e.get("coords"),[e.get("target")])});e.push(r)}a.removeAll();t.geoObjects.remove(a);a.add(e);t.geoObjects.add(a)}async function n(o,r,e){await o.balloon.open(r,{content:`<div class= 'reviews'>${t(e)}</div>`+`<div class='review__title'>Отзыв:</div>
            <form id='add-form'>
            <input type='text' class='review__input' placeholder='Укажите ваше имя' name='author'><br><br>
            <input type='text' class='review__input' placeholder='Укажите место' name='place'><br><br>
            <textarea placeholder='Оставьте отзыв' class='review__textarea' name='review'></textarea><br></br>
            <button id='add-btn'>Добавить</button><br>
            </form>`});document.querySelector("#add-form").addEventListener("submit",function(e){e.preventDefault();const t={coords:r,author:this.elements.author.value,place:this.elements.place.value,reviewText:this.elements.review.value};localStorage.reviews=JSON.stringify([...s(),t]);i(o);o.balloon.close()})}}t()})();
//# sourceMappingURL=index.25519dd846d88d261827.js.map