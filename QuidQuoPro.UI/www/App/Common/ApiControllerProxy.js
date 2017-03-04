var PackageUI;
(function (PackageUI) {
    var ApiControllerProxy = (function () {

        var METHOD_NAME_GET = 'GET';
        var METHOD_NAME_POST = 'POST';

        function sendRequestAsync(method, url, data, skipAdditionalParameters) {
            var additionalParameters = skipAdditionalParameters ? {} : getAdditionalRequestParameters();
            var headers = null;
            if (method === METHOD_NAME_GET) {
                data = _.extend({}, data);
                data = _.extend(data, additionalParameters);
            } else {
                headers = additionalParameters;
            }
            return $.ajax(
            {
                method: method,
                url: encodeURI(url),
                data: data,
                headers: headers
            });
        }

        function getAdditionalRequestParameters() {
            var parameters = {};
            //parameters[environment.cookie.sessionToken.name] = environment.sessionToken;
            return parameters;
        }

        function ApiControllerProxy() { }

        ApiControllerProxy.prototype.get = function (url, data, skipAdditionalParameters) {
            return sendRequestAsync(METHOD_NAME_GET, url, data, skipAdditionalParameters);
        }

        ApiControllerProxy.prototype.post = function (url, data, skipAdditionalParameters) {
            return sendRequestAsync(METHOD_NAME_POST, url, data, skipAdditionalParameters);
        }

        return ApiControllerProxy;
    })();


    var instanceOf;
    // to creation a single ton object of AppState.
    function getInstance() {
        if (!instanceOf) {
            instanceOf = new ApiControllerProxy();
        }
        return instanceOf;
    }

    PackageUI.ApiControllerProxy = getInstance();
})(PackageUI || (PackageUI = {}));
