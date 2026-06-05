import sys, json
from lxml import html as lh
def extract(path):
    try:
        doc=lh.parse(path).getroot()
    except Exception:
        return {"blocked":True,"examples":[]}
    txt=doc.text_content()
    if "Access Denied" in txt[:2000] or "errors.edgesuite.net" in txt[:2000]:
        return {"blocked":True,"examples":[]}
    nodes=doc.xpath('//div[contains(@class,"codeinput") or contains(@class,"codeoutput")]')
    exs=[]; cur=None
    for n in nodes:
        cls=n.get('class') or ''
        if 'codeinput' in cls:
            for tb in n.xpath('.//div[contains(@class,"btn-group") or contains(@class,"code_actions")]'):
                tb.getparent().remove(tb)
            cur={'in':n.text_content().strip(),'out':''}
            exs.append(cur)
        elif 'codeoutput' in cls and cur is not None:
            cur['out']=(cur['out']+'\n'+n.text_content().strip()).strip()
    # one-line purpose
    purpose=''
    p=doc.xpath('//div[contains(@class,"ref_purpose")]') or doc.xpath('//p[contains(@class,"purpose")]')
    if p: purpose=p[0].text_content().strip()
    return {"blocked":False,"purpose":purpose,"examples":exs}
if __name__=="__main__":
    print(json.dumps(extract(sys.argv[1])))
