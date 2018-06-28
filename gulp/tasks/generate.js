const fs = require('fs');

module.exports = (gulp) => {

    const config = JSON.parse(fs.readFileSync('./frontend.config.json'));
    const slots = config.slot;
    const options = config.options;

    let css = [''],
        js = [''];
    for( let i = 0; i < slots.length; i++){
        let slotName = slots[i].name;
        let value = slots[i].value;
        for( let j = 0; j < options.length; j++ ){
            if ( slotName  === options[j].slot &&
                 value  === options[j].name){
                // console.log(value);
                console.log(options[j].parts.css);
                console.log(options[j].parts.js);
                css.concat(options[j].parts.css);
                js.concat(options[j].parts.js);
                console.log(css);
            }
        }
    }
    // console.log('------');
    // console.log(css);
    // console.log('------');
    // console.log(js);
    // console.log('------');

};
