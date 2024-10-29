Vue.createApp({

    data() {

        return {

            // add here
            Word: 'kOKAIN', 
            Words: [], 
            Message: 'Button clicked!',
            ShouldShow: false,
        }

    },
    
    methods: {

        // add here
        Save(){
            this.Words.push(this.Word);
            console.log(this.Word);
            
        },
        Show(){
            this.ShouldShow = true;
            console.log(this.Words.toString())
        },
        Clear(){
            this.Words = [];
            this.ShouldShow = false; 
            console.log(this.WordsToShow)
        }
    },
    computed: {
        WordsToShow(){
            if (this.Words.toString() != ''){
                return this.Words.toString();
            }
            return 'Empty'
        },

        NumberOfWords(){
            const someSet = new Set(this.Words); 
            return `Number of words: ` + someSet.size   
        },
    },
    

}).mount("#app")