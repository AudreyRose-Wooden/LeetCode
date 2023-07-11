/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let s_list = [];
    let t_list = [];

    for(let i=0; i<s.length; i++){
        if(s[i] == '#'){
            s_list.pop();
        } else {
            s_list.push(s[i])
        }
    }
    for(let i=0; i<t.length; i++){
        if(t[i] == '#'){
            t_list.pop();
        } else {
            t_list.push(t[i])
        }
    }

    console.log(s_list)
    console.log(t_list)
    return s_list.join('') == t_list.join('')
};