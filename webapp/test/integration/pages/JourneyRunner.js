sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"professormanager/test/integration/pages/ProfessorList",
	"professormanager/test/integration/pages/ProfessorObjectPage"
], function (JourneyRunner, ProfessorList, ProfessorObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('professormanager') + '/test/flp.html#app-preview',
        pages: {
			onTheProfessorList: ProfessorList,
			onTheProfessorObjectPage: ProfessorObjectPage
        },
        async: true
    });

    return runner;
});

