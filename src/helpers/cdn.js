const types = require('./global-enum')
const fs = require('fs');
const moment = require('moment')
const path = require('path');

exports.formatLogs = (content, sourceUrl, targetPath) => {
    let line = []
    const filename = path.basename(`${ sourceUrl }-${ new Date().getTime() }`);
    let stream = fs.createWriteStream(`${ process.cwd() }\\src\\files\\${ filename }`);  
    
    stream.once('open', () => {     
    
        stream.write(`#Version: 1.0\n`);
        stream.write(`#Date: ${ moment().locale('pt-BR').format('YYYY-MM-DD HH:mm:ss') }\n`);
        stream.write(`#Fields: provider http-method status-code uri-path time-taken\n`);     

        content.split('\n').forEach(element => {

            line = element.replace('"', '').split('|');
            if (line.length >= 4) {
                stream.write(`"MINHA CDN"`);
                stream.write(` ${ line[types.LOG_FILE.COLUMN_VERB].split(' ')[0] }`);
                stream.write(` ${ line[types.LOG_FILE.COLUMN_02] }`);
                stream.write(` ${ line[types.LOG_FILE.COLUMN_VERB].split(' ')[1] }`);
                stream.write(` ${ Math.round(line[types.LOG_FILE.COLUMN_05]) }`);
                stream.write(` ${ line[types.LOG_FILE.COLUMN_01] }`);
                stream.write(` ${ types.STATUS_LOG[line[types.LOG_FILE.COLUMN_STATUS]] }\n`);                  
            }

        });
        stream.end();
    });
}
