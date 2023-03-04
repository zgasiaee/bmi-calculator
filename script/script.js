$(document).ready(function () {
  $("[type='range']")
    .add("[type='number']")
    .change(function () {
      var id = $(this).attr('id')
      var rangeVal = $(this).val()

      if ($(this).attr('type') == 'range') {
        $("[type='number']#" + id).val(rangeVal)
      } else if ($(this).attr('type') == 'number') {
        $("[type='range']#" + id).val(rangeVal)
      }
    })

  $('.button').click(function () {
    var width = $('#widthNumber').val()
    var height = $('#heightNumber').val() / 100

    var result = (width / Math.pow(height, 2)).toFixed(1)
    $('.result p').html(result)

    setTimeout(function () {
      switch (true) {
        case result <= 18.4:
          $('.category').html('Underweight')
          $('.category').css('color', '#ffe189')
          $('body').css('backgroundColor', '#ffe189')
          break
        case result >= 18.5 && result <= 24.9:
          $('.category').html('Normal')
          $('.category').css('color', '#28a745')
          $('body').css('backgroundColor', '#28a745')
          break
        case result >= 25 && result < 39.9:
          $('.category').html('Overweight')
          $('.category').css('color', '#ffc107')
          $('body').css('backgroundColor', '#ffc107')
          break
        case result >= 40:
          $('.category').html('Obese')
          $('.category').css('color', '#dc3545')
          $('body').css('backgroundColor', '#dc3545')
          break
      }
    }, 800)
  })
})
