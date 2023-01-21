var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected - '+ results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('listen');

        if(results[0].label == "Barking")
        {
            img.src = 'dog_barking.gif';
            dog = dog + 1;/*
            document.getElementById("result_count").innerHTML = "Barks dectected:"+ dog;
*/      }
        else if(results[0].label = 'Meowing')
        {
            img.src = 'meow.gif';
            cat = cat + 1;/*
            document.getElementById("result_count").innerHTML = "Meows detcted:"+ cat;
*/      }        
        /*
        else if(results[0].label = 'Roar')
        {
            img.src = "https://th.bing.com/th/id/R.ed424ce7e8aa8e8ea5909c5ec394be07?rik=Q5S23Xusd9rU%2bQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fKTj%2fXXX%2fKTjXXX8gc.gif&ehk=KUdjPcBBkT%2fjY0VxirZWUyUob6J0qb5M73sJqKYFXbA%3d&risl=&pid=ImgRaw&r=0";
            lion = lion + 1;
            document.getElementById("result_count").innerHTML = "Roars detcted:"+ lion;
        }
        else if(results[0].label = 'Mooing')
        {
            img.src = "https://th.bing.com/th/id/R.b4e11dc2b70207cb94f423386acf3f2c?rik=j%2fSbeyNl%2b8Nc2Q&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9iR%2f5qE%2f9iR5qEgpT.gif&ehk=ShP2z1%2fWaL85z9sRKB1qRZaNUWwnJc9ykc22f6jdMGc%3d&risl=&pid=ImgRaw&r=0";
            cow = cow + 1;
            document.getElementById("result_count").innerHTML = "Moos detected:"+ cow;
        }*/
        else
        {
            img.src = 'listen.gif';
        }
    }
}