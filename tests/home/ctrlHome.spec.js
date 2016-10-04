describe("ctrlHome Unit Test ->", function () {
    "use strict";

    var
        controller,
        $scope;

    beforeEach(module("ajsbpApp"));

    beforeEach(module("home"));

    beforeEach(inject(function (_$rootScope_, _$controller_) {

        $scope = _$rootScope_.$new();

        controller = _$controller_("ctrlHome", {
            "$scope": $scope
        });

    }));

    it("actually is not a unit test ->", inject(function() {

        expect(controller.documentTitle).toEqual("Home page");

    }));

});
