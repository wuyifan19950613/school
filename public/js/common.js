var devBaseURL = '';

$.myGetJSON = function(options) {
  var url = devBaseURL + options.url || '';
  var contentType = options.options || 'application/json;charset=utf-8';
  var data = options.data || '';
  var dataType = options.dataType || 'json';
  $.ajax({
    headers: {
      token: token
    },
    url: url,
    type: 'GET',
    dataType: dataType,
    data: data,
    contentType: contentType,
    beforeSend: function beforeSend() {
      if (options.beforeSend) options.beforeSend();
    },
    success: function(res) {
      if (options.success) options.success(res);
    },
    error: function(res){
      if (options.error) options.error(res);
    }
  })
};

$.myPostJSON = function(options) {
  var url = devBaseURL + options.url || '';
  var contentType = options.options || 'application/json;charset=utf-8';
  var data = options.data || '';
  var dataType = options.dataType || 'json';
  $.ajax({
    url: url,
    type: 'POST',
    dataType: dataType,
    data: data,
    contentType: contentType,
    success: function(res) {
      if (options.success) options.success(res);
    },
    error: function(res){
      if (options.error) options.error(res);
    }
  })
};
$.myPutJSON = function(options) {
  var url = devBaseURL + options.url || '';
  var contentType = options.options || 'application/json;charset=utf-8';
  var data = options.data || '';
  var dataType = options.dataType || 'json';
  $.ajax({
    url: url,
    type: 'PUT',
    dataType: dataType,
    data: data,
    contentType: contentType,
    success: function(res) {
      if (options.success) options.success(res);
    },
    error: function(res){
      if (options.error) options.error(res);
    }
  })
};
$.myDeleteJSON = function(options) {
  var url = devBaseURL + options.url || '';
  var contentType = options.options || 'application/json;charset=utf-8';
  var data = options.data || '';
  var dataType = options.dataType || 'json';
  $.ajax({
    url: url,
    type: 'DELETE',
    dataType: dataType,
    data: data,
    contentType: contentType,
    success: function(res) {
      if (options.success) options.success(res);
    },
    error: function(res){
      if (options.error) options.error(res);
    }
  })
};
