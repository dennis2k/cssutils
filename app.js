Vue.component('infobox', {
    props: ['title', 'text'],
    template: '<div class="p-3 bg-light text-left">' +
    '<p class="bold text-regular caps">' +
        '{{title}}' +
    '</p>' +
    '<p class="text-regular italic">' +
        '{{text}}' +
    '</p>' +
'</div>'
  })
var app = new Vue({
    el: '#app',
    data: {
        randomText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",

        screens: ["xs", "sm", "md", "lg"],
        directionLetters: ["t", "b", "l", "r"],
        screenNames: {"xs": "Extra small device", "sm": "Small device", "md": "Medium device", "lg" : "Large device"},
        dividerSizes: [1, 2, 3, 4, 5]
    },
    computed: {
        
    },
    methods: {
        getDividerResponsiveClass: function(size) {
            let responsiveClass = "";
            this.screens.forEach((screen) => {
                responsiveClass += "divider-" + size + "-" + screen;
            })
            return responsiveClass;
        }
    }
})



