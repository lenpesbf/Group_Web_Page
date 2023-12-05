//  ************************************************************ 
//  *            TIẾN TRÌNH TRONG ABOUT                        *  
//  ************************************************************   
 // Task Progress
 let countProgress = 0;
 let loadingProgress = document.querySelectorAll('.load-progress');
 let valueShowProgress = document.querySelectorAll('.load-value');

 // Contribute to Group Page
 let countGroup = 0;
 let loadingGroup = document.querySelectorAll('.contribute-group .load-contribute');
 let valueShowGroup = document.querySelectorAll('.contribute-group .load-value-group');

 // Contribute to Project Page
 let countProject = 0;
 let loadingProject = document.querySelectorAll('.contribute-project .load-contribute');
 let valueShowProject = document.querySelectorAll('.contribute-project .load-value-group');

 window.addEventListener("load", function () {
     countProgress = 0;
     countGroup = 0;
     startLoadingProgress();
     startLoadingGroup();
     startLoadingProject();
 });

 function startLoadingProgress() {
     loadingProgress.forEach((progress, index) => {
         startLoading(progress, valueShowProgress[index], countProgress, 50);
     });
 }

 function startLoadingGroup() {
     loadingGroup.forEach((group, index) => {
         startLoading(group, valueShowGroup[index], countGroup, 20);
     });
 }

 function startLoadingProject() {
     loadingProject.forEach((project, index) => {
         startLoading(project, valueShowProject[index], countGroup, 20);
     });
 }

 function startLoading(loading, valueShow, count, maxCount) {
     if (count == maxCount) {
         valueShow.innerHTML = maxCount + "%";
     } else {
         count = count + 1;
         loading.style.setProperty("--loading-value", count + '%');
         valueShow.innerHTML = maxCount + '%';
         setTimeout(function () {
             startLoading(loading, valueShow, count, maxCount);
         }, 50);
     }
 }
