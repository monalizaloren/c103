      
Webcam.attach( '#camera' );

//Crie a variável que guarda a camera 
??? = document.getElementById("camera");
      
  Webcam.set({
    //Defina a largura e a altura como 300 e 500 
    ???
    ???
    //Defina o formato da foto como 'png'
    image_format : ???
    png_quality:90
  });

  //Crie a função que captura a imagem
????
?
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
?


//Inicializa o método Image Classifier com MobileNet
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VK6X7UYHV/model.json',modelLoaded);

  
  function modelLoaded() {
    console.log('Modelo Carregado!');
  }
      
  //Crie a função que idenfica a imagem
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }


// Uma função a ser executada quando obtemos algum erro e os resultados
function gotResult(error, results) {
  // Exibir erro no console
  ???
  } else {
    //mostre no console os results
   ???
   //Utilize o código que altera o HTML com javascript 
    document.getElementById("result_object_name").??? = results[0].label;
    document.getElementById("result_object_accuracy").??? = results[0].confidence.toFixed(3);
  }
}
