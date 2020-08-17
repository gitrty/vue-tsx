import Vue from 'vue'
import CreateAPI from 'vue-create-api'

Vue.use(CreateAPI)

const dynamicComponentAlias: any = {
    Dialog: () => import('./dialog/index'),
};

async function getDynamicComponent(path: string, callback: Function) {
    try {
        Vue.createAPI(dynamicComponentAlias[path], [], true)
        callback();
    } catch (error) {
        // console.info(error)
    }
}

Vue.prototype.$getDynamicComponent = getDynamicComponent;

