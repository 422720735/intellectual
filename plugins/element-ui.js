// import Element from 'element-ui'
// Vue.use(Element, { locale })
import Vue from 'vue'
import locale from 'element-ui/lib/locale/lang/en'
import { Carousel, CarouselItem, Icon, Tooltip } from 'element-ui'

Vue.use(Icon)
Vue.use(Tooltip)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use({ locale })
