
function sort() {






points=document.querySelectorAll(".sort_numbers");
players=document.querySelectorAll(".sort");
vote=document.querySelectorAll(".vote_now_img ");
pr=document.querySelectorAll(".pr");
var a=[],temp;

for (var i = 0; i < points.length; i++) {
a[i]=parseInt(points[i].textContent);

}
len=a.length;




for (var i = 0; i < len; i++) {
for (var j = 0; j < len; j++) {


  if(a[i]>a[j])
  {
    // need this for thecode to work
   temp=a[j];
  a[j]=a[i];
  a[i]=temp;
// =-------------------
// points
    temp=points[j].textContent;
    points[j].textContent=points[i].textContent;
    points[i].textContent=temp;
// end of Points

// vote image
icon1=vote[i];
icon2=vote[j];
temp=icon1.src;
icon1.src=icon2.src;
icon2.src=temp;
// end of vote img

// names sections
temp=players[j].textContent;
players[j].textContent=players[i].textContent;
players[i].textContent=temp;


// profile picture sections
icon1=pr[i];
icon2=pr[j];
temp=icon1.src;
icon1.src=icon2.src;
icon2.src=temp;


  }

}
}


}



// section to call functions

sort();
