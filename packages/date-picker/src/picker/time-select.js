import Picker from '../main';
import Panel from '../panel/time-select';

export default {
    mixins: [Picker],

    name: 'AexTimeSelect',

    componentName: 'AexTimeSelect',

    props: {
        type: {
            type: String,
            default: 'time-select',
        },
    },

    beforeCreate() {
        this.panel = Panel;
    },
};
