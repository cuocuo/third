/**
 * Quantumult X: Direct 策略切换（安全默认）
 * 从缺失的 network-direct.js 本地引用改为可订阅的脚本。
 * 使用前请把直连 Wi-Fi 名称填入 DIRECT_SSIDS；空数组时不会更改任何策略。
 * 只处理已有 direct 选项的策略组，保留代理选择/Claude/OpenAI 等策略不变。
 */
const DIRECT_SSIDS = []; // 例如：["Home-Router-Proxy"]
const DIRECT_POLICY = {"漏网之鱼":"direct"};
const NORMAL_POLICY = {"漏网之鱼":"美国 AI"};
const $id = "cuocuo.qx.network-direct.last";
const ssid = $environment.ssid || "";
const previous = $prefs.valueForKey($id) || "";
const isDirect = DIRECT_SSIDS.includes(ssid);
const wasDirect = DIRECT_SSIDS.includes(previous);
function done(){ $prefs.setValueForKey(ssid,$id); $done(); }
if(!DIRECT_SSIDS.length){console.log("Direct 策略切换未设置 Wi-Fi 名单，不更改策略。");done();}
else if(isDirect && !wasDirect){
  $configuration.sendMessage({action:"set_policy_state",content:DIRECT_POLICY}).then(r=>{console.log(r.error||"已切到直连策略");done();}).catch(e=>{console.log(e);done();});
}else if(!isDirect && wasDirect){
  $configuration.sendMessage({action:"set_policy_state",content:NORMAL_POLICY}).then(r=>{console.log(r.error||"已恢复默认策略");done();}).catch(e=>{console.log(e);done();});
}else done();
