function t($){return $&&$.replace(/\$\$([\s\S]+?)\$\$/g,(r,e)=>`

$$
${e.trim()}
$$

`)}export{t as n};
