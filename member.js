function skillsMember(){
    return{
        restrict: 'E',
        templateUrl:'modules/skills/views/member.html',
        controller:'SkillsMemberController',
        constrollerAs:'vm',
        bindToController:true,
        scope:{
            member:'='
        }
    };
}