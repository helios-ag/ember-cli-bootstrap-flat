module.exports = {
    normalizeEntityName: function() {
    },

    afterInstall: function() {
        return this.addBowerPackageToProject('bootstrap-flat', '~3.3.4');
    }
};
