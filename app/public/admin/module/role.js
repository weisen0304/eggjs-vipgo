/*
 * @Author: Weisen
 * @Date: 2019-09-29 09:49:12
 * @Github: https://github.com/weisen0304
 */
$(function() {
  // 添加角色
  $('#form-role-add').validate({
    rules: {
      title: {
        required: true,
      },
    },
    onkeyup: false,
    focusCleanup: true,
    success: 'valid',
    submitHandler(form) {
      $.ajax({
        url: '/admin/role/doAdd',
        type: 'post',
        data: $('#form-role-add').serialize(),
        success(res) {
          layer.msg(res.msg);
          if (res.result == 0) {
            layer.msg(res.msg);
            setTimeout(function() {
              const index = parent.layer.getFrameIndex(window.name);
              parent.location.replace(parent.location.href);
              parent.layer.close(index);
              window.location.href = '/admin/role';
            }, 1000);
          }
        },
      });
    },
  });

  // 编辑角色
  $('#form-role-edit').validate({
    rules: {
      title: {
        required: true,
      },
    },
    onkeyup: false,
    focusCleanup: true,
    success: 'valid',
    submitHandler(form) {
      $.ajax({
        url: '/admin/role/doEdit',
        type: 'post',
        data: $('#form-role-edit').serialize(),
        success(res) {
          layer.msg(res.msg);
          if (res.result == 0) {
            layer.msg(res.msg);
            setTimeout(function() {
              const index = parent.layer.getFrameIndex(window.name);
              parent.location.replace(parent.location.href);
              parent.layer.close(index);
              window.location.href = '/admin/role';
            }, 500);
          } else {
            layer.msg(res.msg, 2);
          }
        },
      });
    },
  });

  // 编辑角色
  $('#form-role-auth').validate({
    rules: {},
    onkeyup: false,
    focusCleanup: true,
    success: 'valid',
    submitHandler(form) {
      $.ajax({
        url: '/admin/role/doAuth',
        type: 'post',
        data: $('#form-role-auth').serialize(),
        success(res) {
          layer.msg(res.msg);
          if (res.result == 0) {
            layer.msg(res.msg);
            setTimeout(function() {
              const index = parent.layer.getFrameIndex(window.name);
              parent.location.replace(parent.location.href);
              parent.layer.close(index);
              window.location.href = '/admin/role';
            }, 500);
          }
        },
      });
    },
  });
});
