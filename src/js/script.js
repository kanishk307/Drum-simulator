window.addEventListener('keydown',function(event){
   console.log(event.which);    
    
   if(event.which===65){
    document.querySelector('#A').className = 'beat-box-keydown';
   var audioA = document.querySelector('audio[data-key="65"]');  
    audioA.currentTime=0;
    audioA.play();
//    document.querySelector('.title').className = 'wow bounceIn';  
   } 
    
    if(event.which===83){
    document.querySelector('#S').className = 'beat-box-keydown';
   var audioS = document.querySelector('audio[data-key="83"]');  
    audioS.currentTime=0;
    audioS.play();
        
   } 
    
    if(event.which===68){
        document.querySelector('#D').className='beat-box-keydown';
        var audioD=document.querySelector('audio[data-key="68"]');
        audioD.currentTime=0;
        audioD.play();
    }
    
    
    if(event.which===70){
        document.querySelector('#F').className='beat-box-keydown';
        var audioF=document.querySelector('audio[data-key="70"]');
        audioF.currentTime=0;
        audioF.play();
    }
    
    if(event.which===71){
        document.querySelector('#G').className='beat-box-keydown';
        var audioG=document.querySelector('audio[data-key="71"]');
        audioG.currentTime=0;
        audioG.play();
    }
    
    if(event.which===72){
        document.querySelector('#H').className='beat-box-keydown';
        var audioH=document.querySelector('audio[data-key="72"]');
        audioH.currentTime=0;
        audioH.play();
    }
    
    if(event.which===72){
        document.querySelector('#H').className='beat-box-keydown';
        var audioH=document.querySelector('audio[data-key="72"]');
        audioH.currentTime=0;
        audioH.play();
    }
    
    if(event.which===74){
        document.querySelector('#J').className='beat-box-keydown';
        var audioJ=document.querySelector('audio[data-key="74"]');
        audioJ.currentTime=0;
        audioJ.play();
    }
    
    if(event.which===75){
        document.querySelector('#K').className='beat-box-keydown';
        var audioK=document.querySelector('audio[data-key="75"]');
        audioK.currentTime=0;
        audioK.play();
    }
    
    if(event.which===76){
        document.querySelector('#L').className='beat-box-keydown';
        var audioL=document.querySelector('audio[data-key="76"]');
        audioL.currentTime=0;
        audioL.play();
    }
    
});

window.addEventListener('keyup',function(e){
document.querySelector('#A').className = 'beat-box';
document.querySelector('#S').className = 'beat-box';
document.querySelector('#D').className = 'beat-box';
document.querySelector('#F').className = 'beat-box';
document.querySelector('#G').className = 'beat-box';
document.querySelector('#H').className = 'beat-box';
document.querySelector('#J').className = 'beat-box';    
document.querySelector('#K').className = 'beat-box';
document.querySelector('#L').className = 'beat-box';    
});