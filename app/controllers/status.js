const Status = require('../models/status');
class StatusCtl {
    async find(ctx) {
        const { phone } = ctx.query;
        ctx.body = await Status.findOne({ phone });
        // console.log(ctx.body)
    }
    async create(ctx) {
        const { phone } = ctx.request.body;
        const repeatStatus = await Status.findOne({ phone });
        if (repeatStatus) { ctx.throw(409, '文件已经存在') }
        // const repeatStatus=await Status.findOne({phone});
        // if(repeatStatus){ctx.throw(409,'文件已经存在')}
        const status = await new Status(ctx.request.body).save();
        ctx.body = status;
    }
    async update(ctx) {
        const { phone } = ctx.request.body;
        const status = await Status.findOneAndUpdate({ phone }, ctx.request.body, { new: true })
        if (!status) {
            ctx.throw(404, '文件不存在！')
        }
        ctx.body = status;
    }
    async del(ctx) {
        const { phone } = ctx.request.body;
        const status = await Status.findOneAndRemove({ phone });
        if (!status) { ctx.throw(404, '文件不存在！') }
        ctx.status = 204;
    }
};

module.exports = new StatusCtl();

