import CarouselItem from './main';

/* istanbul ignore next */
CarouselItem.install = function(Vue) {
    Vue.component(CarouselItem.name, CarouselItem);
};

export default CarouselItem;
