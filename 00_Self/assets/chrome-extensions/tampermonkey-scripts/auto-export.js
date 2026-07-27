// Tampermonkey 自动导出脚本
// 使用方法：在 Tampermonkey 管理面板的控制台中运行

(function() {
    'use strict';

    console.log('🚀 Tampermonkey 脚本导出工具已加载');
    console.log('');

    // 导出所有脚本的函数
    async function exportAllScripts() {
        try {
            console.log('📦 开始导出脚本...');

            // 获取所有脚本
            const scripts = await new Promise((resolve, reject) => {
                chrome.runtime.sendMessage({
                    action: 'exportScripts'
                }, (response) => {
                    if (chrome.runtime.lastError) {
                        reject(chrome.runtime.lastError);
                    } else {
                        resolve(response);
                    }
                });
            });

            if (!scripts || scripts.length === 0) {
                console.log('❌ 未找到任何脚本');
                return;
            }

            console.log(`✅ 找到 ${scripts.length} 个脚本`);

            // 创建导出数据
            const exportData = {
                version: '1.0',
                date: new Date().toISOString(),
                scripts: scripts
            };

            // 转换为 JSON
            const jsonStr = JSON.stringify(exportData, null, 2);

            // 创建下载链接
            const blob = new Blob([jsonStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `tampermonkey-scripts-${new Date().toISOString().slice(0, 10)}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            console.log('✅ 脚本已导出');
            console.log('📁 请将下载的 JSON 文件保存到：');
            console.log('   00_Self/assets/chrome-extensions/tampermonkey-scripts/');

        } catch (error) {
            console.error('❌ 导出失败:', error);
            console.log('');
            console.log('💡 请尝试以下方法：');
            console.log('1. 刷新页面后重试');
            console.log('2. 使用 Tampermonkey 内置的导出功能');
            console.log('3. 手动复制脚本代码');
        }
    }

    // 导出单个脚本的函数
    function exportSingleScript(scriptId) {
        chrome.runtime.sendMessage({
            action: 'exportScript',
            scriptId: scriptId
        }, (response) => {
            if (response && response.script) {
                const blob = new Blob([response.script], { type: 'text/javascript' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `script-${scriptId}.js`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                console.log(`✅ 脚本 ${scriptId} 已导出`);
            }
        });
    }

    // 添加导出按钮
    function addExportButton() {
        const button = document.createElement('button');
        button.textContent = '📦 导出所有脚本';
        button.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            padding: 12px 24px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            transition: transform 0.2s, box-shadow 0.2s;
        `;

        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.6)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
        });

        button.addEventListener('click', exportAllScripts);

        document.body.appendChild(button);
        console.log('✅ 导出按钮已添加到页面右上角');
    }

    // 初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addExportButton);
    } else {
        addExportButton();
    }

    // 暴露全局函数
    window.exportTampermonkeyScripts = exportAllScripts;
    window.exportTampermonkeyScript = exportSingleScript;

    console.log('');
    console.log('📋 使用方法：');
    console.log('1. 点击页面右上角的导出按钮');
    console.log('2. 或在控制台运行：exportTampermonkeyScripts()');
    console.log('3. 导出的 JSON 文件请保存到 tampermonkey-scripts/ 文件夹');

})();
