/*
 * @Author: Weisen
 * @Date: 2019-09-29 09:49:12
 * @Github: https://github.com/weisen0304
 */
'use strict';
/* eslint-disable */
$(function() {
  // 添加优惠券
  $("#form-coupon-add").validate({
    rules: {
      module_name: {
        required: true
      }
    },
    onkeyup: false,
    focusCleanup: true,
    success: "valid",
    submitHandler(form) {
      $.ajax({
        url: "/coupon/manager/doAdd",
        type: "post",
        data: $("#form-coupon-add").serialize(),
        success(res) {
          layer.msg(res.msg);
          if (res.result == 0) {
            layer.msg(res.msg);
            setTimeout(function() {
              const index = parent.layer.getFrameIndex(window.name);
              parent.location.replace(parent.location.href);
              parent.layer.close(index);
              window.location.href = "/coupon/manager";
            }, 500);
          }
        }
      });
    }
  });

  // 编辑优惠券
  $("#form-coupon-edit").validate({
    rules: {
      module_name: {
        required: true
      }
    },
    onkeyup: false,
    focusCleanup: true,
    success: "valid",
    submitHandler(form) {
      $.ajax({
        url: "/admin/access/doEdit",
        type: "post",
        data: $("#form-access-edit").serialize(),
        success(res) {
          layer.msg(res.msg);
          if (res.result == 0) {
            layer.msg(res.msg);
            setTimeout(function() {
              const index = parent.layer.getFrameIndex(window.name);
              parent.location.replace(parent.location.href);
              parent.layer.close(index);
              window.location.href = "/admin/access";
            }, 500);
          }
        }
      });
    }
  });

  // 上传图片
  $("#upload-btn").on("click", function() {
    console.log($("#upload-file").get(0).files);
    if ($("#upload-file").get() === []) return;
    var fd = new FormData();
    fd.append("file", $("#upload-file").get(0).files[0]);
    fd.append("isAjax", "yes");
    fd.append(
      "customName",
      $(this)
        .find("#customName")
        .val() || ""
    );
    $.ajax({
      type: "POST",
      url: "/admin/upload?_csrf=" + getCsrf(),
      dataType: "json",
      processData: false,
      contentType: false,
      data: fd,
      success: function(data) {
        $("#file").val(data.urls[0]);
        console.log($("#upload-file").val());
      },
      error: function(err) {
        console.log(err);
      }
    });
    // 通过 cookie 获取 csrf token
    function getCsrf() {
      var keyValue = document.cookie.match("(^|;) ?csrfToken=([^;]*)(;|$)");
      return keyValue ? keyValue[2] : null;
    }
  });
});
