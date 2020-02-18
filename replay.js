function replay(text){
    if(text === "হ্যালো"){
                           
        const url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=bn&q="+'হাই';
        $('iframe').attr('src', url);
   }
   else if(text === "কেমন আছো"){
                           
        const url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=bn&q="+'আমি ভালো আছি আপনি কেমন আছেন';
        $('iframe').attr('src', url);
    }
    else if(text === "তোমার নাম কি"){
                           
        const url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=bn&q="+'আমার নাম দাশু';
        $('iframe').attr('src', url);
    }
    else if(text === "তোমার কাজ কি"){
                           
        const url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=bn&q="+'আমার কাজ মানুষকে সাহায্য করা';
        $('iframe').attr('src', url);
    }
    else if(text === "তোমার বয়স কতো"){
        function calculate_age(dob) { 
            var diff_ms = Date.now() - dob.getTime();
            var age_dt = new Date(diff_ms); 
          
            return Math.abs(age_dt.getUTCFullYear() - 1970);
        }
        
        calculate_age(new Date(1982, 11, 4));
        
                           
        const url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=bn&q="+'আমার বয়স,'+
        calculate_age(new Date(2020, 2, 17))+", দিন";
        $('iframe').attr('src', url);
    }

    else if(text === "ইউটিউবে যাও"){
        function openInNewTab(url) {
            var win = window.open(url, '_blank');
            win.focus();
          }
                       
        const url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=bn&q="+'ঠিক আছে, জনাব                                                          ';
        $('iframe').attr('src', url);
        openInNewTab("https://www.youtube.com/") ; 
    }
    else if(text === "কেমন আছো"){
                           
        const url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=bn&q="+'আমি ভালো আছি আপনি কেমন আছেন';
        $('iframe').attr('src', url);
    }
    else{
        const url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=bn&q="+'দুঃখিত আমি বুঝতে পারিনি';
        $('iframe').attr('src', url);
    }

}