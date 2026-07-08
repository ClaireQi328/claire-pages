// 小红书 Cookie 导出脚本
// 使用方法：
// 1. 在 Chrome 打开 xiaohongshu.com 并登录
// 2. 按 F12 打开 DevTools → Console
// 3. 粘贴以下代码并回车
// 4. 代码会自动下载 cookies.json 文件

(function() {
  var cookies = document.cookie.split('; ').map(function(c) {
    var parts = c.split('=');
    var name = parts[0];
    var value = parts.slice(1).join('=');
    return {
      name: name,
      value: value,
      domain: '.xiaohongshu.com',
      path: '/',
      expires: Math.floor(Date.now()/1000) + 86400*30,
      size: name.length + value.length,
      httpOnly: false,
      secure: false,
      session: false,
      priority: 'Medium',
      sameParty: false,
      sourceScheme: 'Secure',
      sourcePort: 443
    };
  });

  var json = JSON.stringify(cookies, null, 2);
  var blob = new Blob([json], {type: 'application/json'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = 'cookies.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  console.log('✅ cookies.json 已下载！');
  console.log('共导出 ' + cookies.length + ' 个 cookie');
  console.log('请将文件移动到: ~/cookies.json');
})();
