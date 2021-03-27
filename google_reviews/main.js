
///////////////////////////////////
//-------------------------------//
/////////   REVIEWS       /////////
//-------------------------------//
///////////////////////////////////



function formatReview(review) {
    var formattedReview = "<div class='outer-cont'><div class='indi-review'>"
    + "<div class='stars'>" + stars(review.rating) + "</div>"
    + "<p>" + review.text + "</p>"
    + "<h1>" + review.author_name + "</h1>"
    + "<h2>" + review.relative_time_description + "</h2>"
    + "</div></div>"
    return formattedReview
  }
  
  
  
  const xhr = new XMLHttpRequest();
  
  xhr.onload = function () {
    const serverResponse = document.getElementById("serverResponse");
    const myString = JSON.parse(this.responseText)
    var finalReviewStr = ""
    var i;
    for (i = 0; i < myString.length; i++) {
        var currentItem = formatReview(myString[i])
        finalReviewStr += currentItem
        }
        serverResponse.innerHTML = finalReviewStr
          $('.review-section').slick({
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              prevArrow: false,
              nextArrow: false,
              autoplay: true,
              autoplaySpeed: 2000,
          });
        }
  
  xhr.open("POST", `request.php`);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send();
  
  
  
    //Convert numbers to stars
  
    // function stars(string) {
    //   string.innerHTML = string.innerHTML.replace(/(\d+)/g,function(a){return Array(+a+1).join('&#9733;')});
    // }
  
    function stars(string) {
        x=0
        var mystring = "";
        while (x < string) {
          mystring += "&#9733;"
          x +=1;
        }
        return mystring
    }




