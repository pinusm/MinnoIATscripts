define(['https://pinusm.github.io/MinnoIATscripts/quiat10.js'], function(iatExtension){


    return iatExtension({
        category1 : {
            name : 'שמנים', 
            title : {
                media : {word : 'אנשים שמנים'}, 
                css : {color:'#31940F','font-size':'1.4em'}, 
                height : 4 
            }, 
            stimulusMedia : [ 
                {image: 'fatman1.jpg'},
                {image: 'fatman3.jpg'},
                {image: 'fatman4.jpg'},
				{image: 'fatman5.jpg'},
                {image: 'fatman6.jpg'},                 
				{image: 'fatwoman1.jpg'},
                {image: 'fatwoman2.jpg'},
                {image: 'fatwoman3.jpg'},
                {image: 'fatwoman4.jpg'},
                {image: 'fatwoman6.jpg'}     
    	    ],
    		
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 :    {
            name : 'רזים', 
            title : {
                media : {word : 'אנשים רזים'}, 
                css : {color:'#31940F','font-size':'1.4em'}, 
                height : 4 
            }, 
            stimulusMedia : [ 
                {image: 'thinman1.jpg'},
                {image: 'thinman2.jpg'},
                {image: 'thinman3.jpg'},
				{image: 'thinman5.jpg'},
                {image: 'thinman6.jpg'},                 
				{image: 'thinwoman1.jpg'},
                {image: 'thinwoman2.jpg'},
                {image: 'thinwoman3.jpg'},
				{image: 'thinwoman5.jpg'},
                {image: 'thinwoman6.jpg'}  
            ],
    		
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        base_url : {//Where are your images at?
            image : 'https://pinusm.github.io/MinnoIATscripts/images/'
        },
        attribute1 : {
            name : 'רע',
            title : {
                media : {word : 'מילים שליליות'},
                css : {color:'#0000FF','font-size':'1.4em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'כאב'},
                {word: 'כשלון'},
                {word: 'מגעיל'},
                {word: 'רשע'},
                {word: 'נורא'},
                {word: 'בחילה'},
                {word: 'גרועה'},
                {word: 'רוע'}

            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'טוב',
            title : {
                media : {word : 'מילים חיוביות'},
                css : {color:'#0000FF','font-size':'1.4em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'הנאה'},
                {word: 'עונג'},
                {word: 'נפלא'},
                {word: 'אהבה'},
                {word: 'אושר'},
                {word: 'נהדרת'},
                {word: 'שמחה'},
                {word: 'צחוק'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        
        finalText : 'לחצו על מקש הרווח בכדי להמשיך למטלה הבאה', 	
        finalTouchText : 'געו באזור הירוק בתחתית המסך על מנת להמשיך למטלה הבאה',
		
	    
	shortData: true,

        leftKeyText : 'מקש "E"', 
        rightKeyText : 'מקש "I"', 
        orText : 'או',			
        instAttributePractice: '<div dir="rtl" style="font-size:20px; text-align:center;">' +
            '<p><u> חלק blockNum מתוך nBlocks </u></p>' +
			'<p style="vertical-align:bottom; margin-right:10px;">' +
            'הקישו באצבע שמאל על מקש <b>E</b> ' + 
            'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftAttribute</font><br/>'+
            'הקישו באצבע ימין על מקש <b>I</b> '+ 
            'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightAttribute</font><br/>'+
            'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע<br/> '+
			'לחצו על המקש האחר כדי להמשיך<br/>' +
			'<u>השיבו מהר ככל האפשר אך היו מדויקים</u></p>'+
			'<p>לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</p>'+
            '</div>',			
            
            instAttributePracticeTouch: [
				'<div dir="rtl">',
					'<p align="center">',
						'<u>חלק blockNum מ- nBlocks</u>',
					'</p>',
					'<p dir="rtl" align="right" style="margin-left:5px">',
						'<br/>',
						'יש לשים את אצבע <b>ימין</b> על האיזור הירוק עבור פריטים ששייכים לקטגוריה  <font color="#0000ff">rightAttribute</font>.<br/>',
						'יש לשים את אצבע <b>שמאל</b> על האיזור הירוק עבור פריטים ששייכים לקטגוריה  <font color="#0000ff">leftAttribute</font>.<br/>',
                    	'הפריטים יופיעו אחד אחרי השני.<br/>',
						'<br/>',
						'אם תטעו, <font color=\"#ff0000\"><b>X</b></font> אדום יופיע. אנא געו בצד השני. יש להגיב כמה שיותר מהר ובצורה מדויקת',
					'</p>',
					'<p dir="rtl" align="center">יש לגעת באיזור הירוק <b>מטה </b> כדי להתחיל.</p>',
				'</div>'
			].join('\n'),

        instCategoriesPractice: '<div dir="rtl" style="font-size:20px; text-align:center;">' +
            '<p><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
			'<p style="vertical-align:bottom; margin-right:10px;">' +
            'הקישו באצבע שמאל על מקש <b>E</b> ' + 
            'עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font><br/>'+
            'הקישו באצבע ימין על מקש <b>I</b> ' + 
            'עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font><br/>'+
            'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע<br/> '+
			'לחצו על המקש האחר כדי להמשיך<br/>' +
			'<u>השיבו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
			'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>'			,			
        
        instCategoriesPracticeTouch: [
				'<div dir="rtl">',
					'<p align="center">',
						'<u>חלק blockNum מ- nBlocks</u>',
					'</p>',
					'<p dir="rtl" align="right" style="margin-left:5px">',
						'<br/>',
						'יש לשים את אצבע <b>ימין</b> על האיזור הירוק עבור פריטים ששייכים לקטגוריה  <font color="#336600">rightCategory</font>.<br/>',
						'יש לשים את אצבע <b>שמאל </b>על האיזור הירוק עבור פריטים ששייכים לקטגוריה  <font color="#336600">leftCategory</font>.<br/>',
                        'הפריטים יופיעו אחד אחרי השני.<br/>',
						'<br/>',
						'אם תטעו, <font color=\"#ff0000\"><b>X</b></font> אדום יופיע. אנא געו בצד השני. יש להגיב כמה שיותר מהר ובצורה מדויקת',
					'</p>',
					'<p dir="rtl" align="center">יש לגעת באיזור הירוק <b>מטה </b> כדי להתחיל.</p>',
				'</div>'
			].join('\n'),

        instFirstCombined : '<div dir="rtl" style="font-size:20px; text-align:center;">' +
            '<p><u> חלק blockNum מתוך nBlocks </u></p>' +
			'<p style="vertical-align:bottom; margin-right:10px;">' +
            'הקישו באצבע שמאל על מקש <b>E</b> '+ 
            'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftAttribute</font> ' +
            'או עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font><br/>'+
            'הקישו באצבע ימין על מקש <b>I</b> ' + 
            'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightAttribute</font> '+
            'או עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font><br/>'+
			'כל פריט מתאים רק לקטגוריה אחת<br/><br/>' +
            'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע<br/>'+
			'לחצו על המקש האחר כדי להמשיך<br/>' +
			'<u>השיבו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
			'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>',			
		
        
        instFirstCombinedTouch:[
			'<div dir="rtl">',
            '<p align="center">',
                '<u>חלק blockNum מ- nBlocks</u>',
            '</p>',
            '<br/>',
            '<br/>',
            '<p dir="rtl" align="right" style="margin-left:5px">',
            'יש לשים את אצבע <b>ימין</b> על האיזור הירוק עבור פריטים ששייכים לקטגוריות  <font color="#336600">rightCategory</font> ו<font color="#0000ff">rightAttribute</font>.</br>',
            'יש לשים את אצבע <b>שמאל</b> על האיזור הירוק עבור פריטים ששייכים לקטגוריות  <font color="#336600">leftCategory</font> ו<font color="#0000ff">leftAttribute</font>.</br>',
                'אם תטעו, <font color=\"#ff0000\"><b>X</b></font> אדום יופיע. אנא געו בצד השני. יש להגיב כמה שיותר מהר ובצורה מדויקת',
                '</p>',
                '<p dir="rtl" align="center">יש לגעת באיזור הירוק <b>מטה </b> כדי להתחיל.</p>',
            '</div>'
		    ].join('\n'),
        instSecondCombined : '<div dir="rtl" style="font-size:20px; text-align:center;">' +
            '<p><u> חלק blockNum מתוך nBlocks </u></p>' +
			'<p style="vertical-align:bottom; margin-right:10px;">' +
            'הקישו באצבע שמאל על מקש <b>E</b> '+ 
            'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftAttribute</font> '+
            'או עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font><br/>'+
            'הקישו באצבע ימין על מקש <b>I</b> '+ 
            'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightAttribute</font> ' +
            'או עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font><br/>'+
			'כל פריט מתאים רק לקטגוריה אחת<br/><br/>' +
            'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע<br/>'+
			'לחצו על המקש האחר כדי להמשיך<br/>' +
			'<u>השיבו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
			'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>',
        instSecondCombinedTouch:[
				'<div dir="rtl">',
					'<p align="center"><u>חלק blockNum מ- nBlocks</u></p>',
					'<br/>',
					'<br/>',

					'<p dir="rtl" align="right" style="margin-left:5px">',
					'יש לשים את אצבע <b>ימין</b> על האיזור הירוק עבור פריטים ששייכים לקטגוריות  <font color="#336600">rightCategory</font> ו<font color="#0000ff">rightAttribute</font>.<br/>',
					'יש לשים את אצבע <b>שמאל</b> על האיזור הירוק עבור פריטים ששייכים לקטגוריות  <font color="#336600">leftCategory</font> ו<font color="#0000ff">leftAttribute</font>.<br/>',
						'<br/>',
						'יש להגיב כמה שיותר מהר ובצורה מדויקת<br/>',
					'</p>',
					'<p dir="rtl" align="center">יש לגעת באיזור הירוק <b>מטה </b> כדי להתחיל.</p>',
				'</div>'
			].join('\n'),
        instSwitchCategories : '<div dir="rtl" style="font-size:20px; text-align:center;">' +
            '<p><u> חלק blockNum מתוך nBlocks </u><p>' +
			'<p style="vertical-align:bottom; margin-right:10px;">' +
			'<b>שימו לב! הקטגוריות החליפו מיקום</b><br/>' +
            'הקישו באצבע שמאל על מקש <b>E</b> '+ 
            'עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font><br/>'+
            'הקישו באצבע ימין על מקש <b>I</b> '+ 
            'עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font><br/>'+
			'<u>השיבו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
			'<p>לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</p></div>',

        remindErrorText : '<p dir="rtl" align="center" style="font-size:"0.6em"; font-family:arial">' +
		'אם תעשו טעות, יופיע <font color="#ff0000"><b>X</b></font> אדום. ' +
		'הקישו על המקש השני כדי להמשיך.<p/>',

        remindErrorTextTouch:'<p dir="rtl" align="center" style="font-size:"1.4em"; font-family:arial">' +
        'אם תטעו, <font color=\"#ff0000\"><b>X</b></font> אדום יופיע' +
        '.' + 
        ' אנא געו בצד השני כדי להמשיך<p/>'+
        '<p/>',	
		
        instSwitchCategoriesTouch: [
            '<div dir="rtl">',
                '<p align="center">',
                    '<u>חלק blockNum מ- nBlocks</u>',
                '</p>',
                '<p dir="rtl" align="right" style="margin-left:5px">',
                    '<br/>',
                    '<b>שימו לב, הקטגוריות החליפו את מיקומן!</b><br/>',
                    'יש לשים את אצבע <b>ימין</b> על האיזור הירוק עבור פריטים ששייכים לקטגוריה  <font color="#336600"> rightCategory </font> <br/>',
                    'יש לשים את אצבע <b>שמאל</b> על האיזור הירוק עבור פריטים ששייכים לקטגוריה  <font color="#336600"> leftCategory </font> <br/>',
                        'הפריטים יופיעו אחד אחרי השני.',
                        '<br/>',
                    'אם תטעו, <font color=\"#ff0000\"><b>X</b></font> אדום יופיע. אנא געו בצד השני. יש להגיב כמה שיותר מהר ובצורה מדויקת',
                    '</p>',
                    '<p dir="rtl" align="center">יש לגעת באיזור הירוק <b>מטה </b> כדי להתחיל.</p>',
            '</div>'
        ].join('\n'),

        fb_strong_Att1WithCatA_Att2WithCatB : 'התוצאות מעידות על העדפה אוטומטית חזקה לcategoryB על פני categoryA',
        fb_moderate_Att1WithCatA_Att2WithCatB : 'התוצאות מעידות על העדפה אוטומטית בינונית לcategoryB על פני categoryA',
        fb_slight_Att1WithCatA_Att2WithCatB : 'התוצאות מעידות על העדפה אוטומטית קלה לcategoryB על פני categoryA',
        fb_equal_CatAvsCatB : 'התוצאות שלך לא מצביעות על העדפה אוטומטית בין categoryA לcategoryB',

		//Error messages in the feedback
        manyErrors: 'אי-אפשר לחשב העדפה מהתוצאות כי טעית לעיתים קרובות',
        tooFast: 'אי-אפשר לחשב העדפה מהתוצאות כי השבת מהר מדי בתכיפות גבוהה',
        notEnough: 'אי-אפשר לחשב העדפה מהתוצאות כי לא השבת נכון מספיק פעמים.'
    });

});
