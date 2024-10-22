const Config = require('./lib/config');

/**
 * 通用GetData方法
 * @param {Object} cfg 配置
 * @param {*} Dubbo Dubbo实例
 * @param {*} cb 回调函数
 */
function getData(cfg, Dubbo, cb) {
    var defaultCfg = {
        path: '',
        version: '1.0.0',
        method: '',
        attchmentArgs: { src_ip: '' },
        args: '',
    };
    Object.assign(defaultCfg, cfg);
    if (defaultCfg.path.indexOf('.ant') > -1) {
        defaultCfg.group = 'freight';
    }
    Dubbo.connectMethod(
        defaultCfg,
        function (data) {
            cb(data);
        },
        function (err) {
            cb({ code: 1, msg: err, _onlyData: true });
        }
    );
}
module.exports = function main(event, context, callback) {
    const { req } = event;
    const { dubbo, pageData } = req;
    const { logger } = context;
    const { authResult } = pageData;
    const actype = req.query.actype;
    const data = req.body;
    let config = Config[actype];
    const userData = authResult.userData;
    const operatorId = userData.userId;
    const operatorName = userData.name;

    if (actype && config) {
        let cfg = {
            path: config.path,
            method: config.method,
            version: '1.0.0',
            attchmentArgs: {
                userData: JSON.stringify(userData),
            },
            args: dubbo.java('java.lang.String', JSON.stringify(data)),
        };

        switch (actype) {
            case 'saveAttribute':
                data.operatorId = operatorId;
                data.operatorName = operatorName;
                cfg.args = dubbo.java('java.lang.String', JSON.stringify(data));
                break;
            // case 'fetchModelEnums':
            //   cfg.args = null
            //   break;
            default:
                break;
        }
        getData(cfg, dubbo, function (data) {
            data._onlyData = true;
            callback(null, data);
        });
    } else {
        callback(null, pageData);
    }
};
