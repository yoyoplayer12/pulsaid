module.exports = async function (context, req) {
    context.res = {
        status: 404,
        body: 'Not Found',
        headers: {
            'Content-Type': 'text/plain'
        }
    };
};
