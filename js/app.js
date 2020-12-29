$(document).foundation();

$(function() {
let prevState="INITIAL"

  $('form').on('submit', function() {
    $form = $(this);
    $form.find('#mail_agree').removeClass('error')
    $form.find('#phone_agree').removeClass('error')
    $('.js-error').removeClass('show')
    
    let status = "INITIAL"
    const phoneValue = $form.find('#phone').val();
    const emailValue = $form.find('#email').val(); 
    const emailAgreementValue = $form.find('#mail_agree:checked').length == 1;
    const phoneAgreementValue = $form.find('#phone_agree:checked').length == 1;

    (!phoneValue & !emailValue) ? $('.js-error-form-empty').addClass('show') : true ;

    (!emailAgreementValue & !phoneAgreementValue) ? status ='BOTH_AGREE_ERR': true ;
    
    (!emailAgreementValue & phoneAgreementValue) ? status ='EMAIL_AGREE_ERR' :true;
  
    (!phoneAgreementValue & emailAgreementValue) ? status ='PHONE_AGREE_ERR' :true;

    switch(status) {     
      case 'BOTH_AGREE_ERR':
        $form.find('#mail_agree').addClass('error');
        $form.find('#phone_agree').addClass('error');
        $('.js-error-both-agree').addClass('show');
        break;
      case 'EMAIL_AGREE_ERR':
        $form.find('#mail_agree').addClass('error')
        $('.js-error-phone-agree').addClass('show')
        break;
      case 'PHONE_AGREE_ERR':
        $form.find('#phone_agree').addClass('error')
        $('.js-error-email-agree').addClass('show')
        break;
    }

    if ((status === "INITIAL" || prevState === status) && (!!phoneValue || !!emailValue) ) {
      return true
    } else {
      prevState = status
      return false
    }
    
  })

});
  
