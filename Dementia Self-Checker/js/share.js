function shareTwitter() {
    var sendText = "치매 자가진단 결과"; // 전달할 텍스트
    var sendUrl = "https://dementia-self-checker.netlify.app/"; // 전달할 URL
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

function shareFacebook() {
    var sendUrl = "https://dementia-self-checker.netlify.app/"; // 전달할 URL
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}
  
  