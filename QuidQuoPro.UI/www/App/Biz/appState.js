var PackageUI;
(function (PackageUI) {
    var AppState = (function () {
        /// <summary>Object to store and get application state, like status of logging, user object and session key and etc.</summary>
        function AppState() {
            this.isLoggedOn = false;
            this.Account = undefined;
            this.VkAccessToken = undefined;
            this.VkExpire = undefined;
        }

        AppState.prototype.isLoggedOn = function () {
            /// <summary>Method to return is user logged on or not.</summary>
            /// <returns>If user is logged on return true, otherwise false.</returns>
            return this.isLoggedOn;
        }

        AppState.prototype.LogedOn = function (account) {
            /// <summary>Method set properties after successful logged on.</summary>
            if (account) {
                this.isLoggedOn = true;
                this.Account = account;
            }
        }

        AppState.prototype.VkLogedOn = function (accessToken, expireDate)
        {
            /// <summary>Method set properties after successful logged by VK.</summary>
            if (accessToken) {
                this.VkAccessToken = accessToken;
                this.isLoggedOn = true;
                if (expireDate) {
                    this.VkExpire = expireDate;
                }
            }
        }

        return AppState;
    })();

    var instanceOf;
    // to creation a single ton object of AppState.
    function getInstance() {
        if (!instanceOf ) {
            instanceOf = new AppState();
        }
        return instanceOf;
    }

    PackageUI.AppState = getInstance();
})(PackageUI || (PackageUI = {}));
