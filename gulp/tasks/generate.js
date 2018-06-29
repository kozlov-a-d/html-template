const fs = require('fs');

module.exports = (gulp) => {

    let slots = JSON.parse(fs.readFileSync('./frontend.config.json')).slot;
    let options = JSON.parse(fs.readFileSync('./templates-html/themes.json'));

    let css = [],
        js = [],
        html = [];
    css.concat(2);
    for( let i = 0; i < slots.length; i++){
        let slotName = slots[i].name;
        let value = slots[i].value;
        for( let j = 0; j < options.length; j++ ){
            if ( slotName  === options[j].slot && value  === options[j].name){
                css = css.concat(options[j].parts.css);
                js = js.concat(options[j].parts.js);
                // html = html.concat(options[j].parts.html);
            }
        }
    }
    console.log('------');
    console.log(css);
    console.log('------');
    console.log(js);
    console.log('------');

};
