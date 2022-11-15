let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");

xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
            let data=JSON.parse(this.response);
            //console.log(data)

            for(let i=0;i<data.length;i++){
                let country=data[i];
                console.log(`Flag:${country.flags.svg}`)
                console.log(`Country-Name:${country.name.common}`)
                console.log(`Region:${country.region}`)
                console.log(`SUB-Region:${country.subregion}`)
                console.log(`Population:${country.population}`)
            }
        }
    }
xhr.send();

//Output:
// Flag:https://flagcdn.com/mr.svg
// Country-Name:Mauritania
// Region:Africa
// SUB-Region:Western Africa
// Population:4649660
// Flag:https://flagcdn.com/aw.svg
// Country-Name:Aruba
// Region:Americas
// SUB-Region:Caribbean
// Population:106766
// Flag:https://flagcdn.com/ar.svg
// Country-Name:Argentina
// Region:Americas
// SUB-Region:South America
// Population:45376763
// Flag:https://flagcdn.com/se.svg
// Country-Name:Sweden
// Region:Europe
// SUB-Region:Northern Europe
// Population:10353442
// Flag:https://flagcdn.com/mv.svg
// Country-Name:Maldives
// Region:Asia
// SUB-Region:Southern Asia
// Population:540542
// Flag:https://flagcdn.com/mx.svg
// Country-Name:Mexico
// Region:Americas
// SUB-Region:North America
// Population:128932753
// Flag:https://flagcdn.com/nz.svg
// Country-Name:New Zealand
// Region:Oceania
// SUB-Region:Australia and New Zealand
// Population:5084300
// Flag:https://flagcdn.com/ec.svg
// Country-Name:Ecuador
// Region:Americas
// SUB-Region:South America
// Population:17643060
// Flag:https://flagcdn.com/wf.svg
// Country-Name:Wallis and Futuna
// Region:Oceania
// SUB-Region:Polynesia
// Population:11750
// Flag:https://flagcdn.com/ax.svg
// Country-Name:Åland Islands
// Region:Europe
// SUB-Region:Northern Europe
// Population:29458
// Flag:https://flagcdn.com/me.svg
// Country-Name:Montenegro
// Region:Europe
// SUB-Region:Southeast Europe
// Population:621718
// Flag:https://flagcdn.com/pk.svg
// Country-Name:Pakistan
// Region:Asia
// SUB-Region:Southern Asia
// Population:220892331
// Flag:https://flagcdn.com/pn.svg
// Country-Name:Pitcairn Islands
// Region:Oceania
// SUB-Region:Polynesia
// Population:56
// Flag:https://flagcdn.com/zm.svg
// Country-Name:Zambia
// Region:Africa
// SUB-Region:Eastern Africa
// Population:18383956
// Flag:https://flagcdn.com/sc.svg
// Country-Name:Seychelles
// Region:Africa
// SUB-Region:Eastern Africa
// Population:98462
// Flag:https://flagcdn.com/my.svg
// Country-Name:Malaysia
// Region:Asia
// SUB-Region:South-Eastern Asia
// Population:32365998
// Flag:https://flagcdn.com/no.svg
// Country-Name:Norway
// Region:Europe
// SUB-Region:Northern Europe
// Population:5379475
// Flag:https://flagcdn.com/uz.svg
// Country-Name:Uzbekistan
// Region:Asia
// SUB-Region:Central Asia
// Population:34232050
// Flag:https://flagcdn.com/vu.svg
// Country-Name:Vanuatu
// Region:Oceania
// SUB-Region:Melanesia
// Population:307150
// Flag:https://flagcdn.com/tf.svg
// Country-Name:French Southern and Antarctic Lands
// Region:Antarctic
// SUB-Region:undefined
// Population:400
// Flag:https://flagcdn.com/cx.svg
// Country-Name:Christmas Island
// Region:Oceania
// SUB-Region:Australia and New Zealand
// Population:2072
// Flag:https://flagcdn.com/sg.svg
// Country-Name:Singapore
// Region:Asia
// SUB-Region:South-Eastern Asia
// Population:5685807
// Flag:https://flagcdn.com/sr.svg
// Country-Name:Suriname
// Region:Americas
// SUB-Region:South America
// Population:586634
// Flag:https://flagcdn.com/eh.svg
// Country-Name:Western Sahara
// Region:Africa
// SUB-Region:Northern Africa
// Population:510713
// Flag:https://flagcdn.com/mf.svg
// Country-Name:Saint Martin
// Region:Americas
// SUB-Region:Caribbean
// Population:38659
// Flag:https://flagcdn.com/cr.svg
// Country-Name:Costa Rica
// Region:Americas
// SUB-Region:Central America
// Population:5094114
// Flag:https://flagcdn.com/hm.svg
// Country-Name:Heard Island and McDonald Islands
// Region:Antarctic
// SUB-Region:undefined
// Population:0
// Flag:https://flagcdn.com/ie.svg
// Country-Name:Ireland
// Region:Europe
// SUB-Region:Northern Europe
// Population:4994724
// Flag:https://flagcdn.com/aq.svg
// Country-Name:Antarctica
// Region:Antarctic
// SUB-Region:undefined
// Population:1000
// Flag:https://flagcdn.com/au.svg
// Country-Name:Australia
// Region:Oceania
// SUB-Region:Australia and New Zealand
// Population:25687041
// Flag:https://flagcdn.com/ly.svg
// Country-Name:Libya
// Region:Africa
// SUB-Region:Northern Africa
// Population:6871287
// Flag:https://flagcdn.com/qa.svg
// Country-Name:Qatar
// Region:Asia
// SUB-Region:Western Asia
// Population:2881060
// Flag:https://flagcdn.com/gl.svg
// Country-Name:Greenland
// Region:Americas
// SUB-Region:North America
// Population:56367
// Flag:https://flagcdn.com/mu.svg
// Country-Name:Mauritius
// Region:Africa
// SUB-Region:Eastern Africa
// Population:1265740
// Flag:https://flagcdn.com/kz.svg
// Country-Name:Kazakhstan
// Region:Asia
// SUB-Region:Central Asia
// Population:18754440
// Flag:https://flagcdn.com/io.svg
// Country-Name:British Indian Ocean Territory
// Region:Africa
// SUB-Region:Eastern Africa
// Population:3000
// Flag:https://flagcdn.com/al.svg
// Country-Name:Albania
// Region:Europe
// SUB-Region:Southeast Europe
// Population:2837743
// Flag:https://flagcdn.com/bh.svg
// Country-Name:Bahrain
// Region:Asia
// SUB-Region:Western Asia
// Population:1701583
// Flag:https://flagcdn.com/pg.svg
// Country-Name:Papua New Guinea
// Region:Oceania
// SUB-Region:Melanesia
// Population:8947027
// Flag:https://flagcdn.com/bi.svg
// Country-Name:Burundi
// Region:Africa
// SUB-Region:Eastern Africa
// Population:11890781
// Flag:https://flagcdn.com/in.svg
// Country-Name:India
// Region:Asia
// SUB-Region:Southern Asia
// Population:1380004385
// Flag:https://flagcdn.com/uy.svg
// Country-Name:Uruguay
// Region:Americas
// SUB-Region:South America
// Population:3473727
// Flag:https://flagcdn.com/lc.svg
// Country-Name:Saint Lucia
// Region:Americas
// SUB-Region:Caribbean
// Population:183629
// Flag:https://flagcdn.com/bb.svg
// Country-Name:Barbados
// Region:Americas
// SUB-Region:Caribbean
// Population:287371
// Flag:https://flagcdn.com/nc.svg
// Country-Name:New Caledonia
// Region:Oceania
// SUB-Region:Melanesia
// Population:271960
// Flag:https://flagcdn.com/lv.svg
// Country-Name:Latvia
// Region:Europe
// SUB-Region:Northern Europe
// Population:1901548
// Flag:https://flagcdn.com/ee.svg
// Country-Name:Estonia
// Region:Europe
// SUB-Region:Northern Europe
// Population:1331057
// Flag:https://flagcdn.com/nu.svg
// Country-Name:Niue
// Region:Oceania
// SUB-Region:Polynesia
// Population:1470
// Flag:https://flagcdn.com/bl.svg
// Country-Name:Saint Barthélemy
// Region:Americas
// SUB-Region:Caribbean
// Population:4255
// Flag:https://flagcdn.com/pr.svg
// Country-Name:Puerto Rico
// Region:Americas
// SUB-Region:Caribbean
// Population:3194034
// Flag:https://flagcdn.com/gd.svg
// Country-Name:Grenada
// Region:Americas
// SUB-Region:Caribbean
// Population:112519
// Flag:https://flagcdn.com/mo.svg
// Country-Name:Macau
// Region:Asia
// SUB-Region:Eastern Asia
// Population:649342
// Flag:https://flagcdn.com/cy.svg
// Country-Name:Cyprus
// Region:Europe
// SUB-Region:Southern Europe
// Population:1207361
// Flag:https://flagcdn.com/im.svg
// Country-Name:Isle of Man
// Region:Europe
// SUB-Region:Northern Europe
// Population:85032
// Flag:https://flagcdn.com/gr.svg
// Country-Name:Greece
// Region:Europe
// SUB-Region:Southern Europe
// Population:10715549
// Flag:https://flagcdn.com/sy.svg
// Country-Name:Syria
// Region:Asia
// SUB-Region:Western Asia
// Population:17500657
// Flag:https://flagcdn.com/lt.svg
// Country-Name:Lithuania
// Region:Europe
// SUB-Region:Northern Europe
// Population:2794700
// Flag:https://flagcdn.com/cw.svg
// Country-Name:Curaçao
// Region:Americas
// SUB-Region:Caribbean
// Population:155014
// Flag:https://flagcdn.com/dm.svg
// Country-Name:Dominica
// Region:Americas
// SUB-Region:Caribbean
// Population:71991
// Flag:https://flagcdn.com/ne.svg
// Country-Name:Niger
// Region:Africa
// SUB-Region:Western Africa
// Population:24206636
// Flag:https://flagcdn.com/kg.svg
// Country-Name:Kyrgyzstan
// Region:Asia
// SUB-Region:Central Asia
// Population:6591600
// Flag:https://flagcdn.com/tt.svg
// Country-Name:Trinidad and Tobago
// Region:Americas
// SUB-Region:Caribbean
// Population:1399491
// Flag:https://flagcdn.com/tg.svg
// Country-Name:Togo
// Region:Africa
// SUB-Region:Western Africa
// Population:8278737
// Flag:https://flagcdn.com/ps.svg
// Country-Name:Palestine
// Region:Asia
// SUB-Region:Western Asia
// Population:4803269
// Flag:https://flagcdn.com/mg.svg
// Country-Name:Madagascar
// Region:Africa
// SUB-Region:Eastern Africa
// Population:27691019
// Flag:https://flagcdn.com/hr.svg
// Country-Name:Croatia
// Region:Europe
// SUB-Region:Southeast Europe
// Population:4047200
// Flag:https://flagcdn.com/fo.svg
// Country-Name:Faroe Islands
// Region:Europe
// SUB-Region:Northern Europe
// Population:48865
// Flag:https://flagcdn.com/ht.svg
// Country-Name:Haiti
// Region:Americas
// SUB-Region:Caribbean
// Population:11402533
// Flag:https://flagcdn.com/ms.svg
// Country-Name:Montserrat
// Region:Americas
// SUB-Region:Caribbean
// Population:4922
// Flag:https://flagcdn.com/ck.svg
// Country-Name:Cook Islands
// Region:Oceania
// SUB-Region:Polynesia
// Population:18100
// Flag:https://flagcdn.com/tl.svg
// Country-Name:Timor-Leste
// Region:Asia
// SUB-Region:South-Eastern Asia
// Population:1318442
// Flag:https://flagcdn.com/mq.svg
// Country-Name:Martinique
// Region:Americas
// SUB-Region:Caribbean
// Population:378243
// Flag:https://flagcdn.com/cu.svg
// Country-Name:Cuba
// Region:Americas
// SUB-Region:Caribbean
// Population:11326616
// Flag:https://flagcdn.com/tw.svg
// Country-Name:Taiwan
// Region:Asia
// SUB-Region:Eastern Asia
// Population:23503349
// Flag:https://flagcdn.com/sz.svg
// Country-Name:Eswatini
// Region:Africa
// SUB-Region:Southern Africa
// Population:1160164
// Flag:https://flagcdn.com/ua.svg
// Country-Name:Ukraine
// Region:Europe
// SUB-Region:Eastern Europe
// Population:44134693
// Flag:https://flagcdn.com/bm.svg
// Country-Name:Bermuda
// Region:Americas
// SUB-Region:North America
// Population:63903
// Flag:https://flagcdn.com/kr.svg
// Country-Name:South Korea
// Region:Asia
// SUB-Region:Eastern Asia
// Population:51780579
// Flag:https://flagcdn.com/pe.svg
// Country-Name:Peru
// Region:Americas
// SUB-Region:South America
// Population:32971846
// Flag:https://flagcdn.com/iq.svg
// Country-Name:Iraq
// Region:Asia
// SUB-Region:Western Asia
// Population:40222503
// Flag:https://flagcdn.com/md.svg
// Country-Name:Moldova
// Region:Europe
// SUB-Region:Eastern Europe
// Population:2617820
// Flag:https://flagcdn.com/sm.svg
// Country-Name:San Marino
// Region:Europe
// SUB-Region:Southern Europe
// Population:33938
// Flag:https://flagcdn.com/ve.svg
// Country-Name:Venezuela
// Region:Americas
// SUB-Region:South America
// Population:28435943
// Flag:https://flagcdn.com/gy.svg
// Country-Name:Guyana
// Region:Americas
// SUB-Region:South America
// Population:786559
// Flag:https://flagcdn.com/ky.svg
// Country-Name:Cayman Islands
// Region:Americas
// SUB-Region:Caribbean
// Population:65720
// Flag:https://flagcdn.com/kh.svg
// Country-Name:Cambodia
// Region:Asia
// SUB-Region:South-Eastern Asia
// Population:16718971
// Flag:https://flagcdn.com/cc.svg
// Country-Name:Cocos (Keeling) Islands
// Region:Oceania
// SUB-Region:Australia and New Zealand
// Population:544
// Flag:https://flagcdn.com/mt.svg
// Country-Name:Malta
// Region:Europe
// SUB-Region:Southern Europe
// Population:525285
// Flag:https://flagcdn.com/lk.svg
// Country-Name:Sri Lanka
// Region:Asia
// SUB-Region:Southern Asia
// Population:21919000
// Flag:https://flagcdn.com/il.svg
// Country-Name:Israel
// Region:Asia
// SUB-Region:Western Asia
// Population:9216900
// Flag:https://flagcdn.com/sd.svg
// Country-Name:Sudan
// Region:Africa
// SUB-Region:Northern Africa
// Population:43849269
// Flag:https://flagcdn.com/vi.svg
// Country-Name:United States Virgin Islands
// Region:Americas
// SUB-Region:Caribbean
// Population:106290
// Flag:https://flagcdn.com/er.svg
// Country-Name:Eritrea
// Region:Africa
// SUB-Region:Eastern Africa
// Population:5352000
// Flag:https://flagcdn.com/ml.svg
// Country-Name:Mali
// Region:Africa
// SUB-Region:Western Africa
// Population:20250834
// Flag:https://flagcdn.com/so.svg
// Country-Name:Somalia
// Region:Africa
// SUB-Region:Eastern Africa
// Population:15893219
// Flag:https://flagcdn.com/nf.svg
// Country-Name:Norfolk Island
// Region:Oceania
// SUB-Region:Australia and New Zealand
// Population:2302
// Flag:https://flagcdn.com/km.svg
// Country-Name:Comoros
// Region:Africa
// SUB-Region:Eastern Africa
// Population:869595
// Flag:https://flagcdn.com/ni.svg
// Country-Name:Nicaragua
// Region:Americas
// SUB-Region:Central America
// Population:6624554
// Flag:https://flagcdn.com/ru.svg
// Country-Name:Russia
// Region:Europe
// SUB-Region:Eastern Europe
// Population:144104080
// Flag:https://flagcdn.com/ug.svg
// Country-Name:Uganda
// Region:Africa
// SUB-Region:Eastern Africa
// Population:45741000
// Flag:https://flagcdn.com/nr.svg
// Country-Name:Nauru
// Region:Oceania
// SUB-Region:Micronesia
// Population:10834
// Flag:https://flagcdn.com/ch.svg
// Country-Name:Switzerland
// Region:Europe
// SUB-Region:Western Europe
// Population:8654622
// Flag:https://flagcdn.com/pt.svg
// Country-Name:Portugal
// Region:Europe
// SUB-Region:Southern Europe
// Population:10305564
// Flag:https://flagcdn.com/tj.svg
// Country-Name:Tajikistan
// Region:Asia
// SUB-Region:Central Asia
// Population:9537642
// Flag:https://flagcdn.com/ss.svg
// Country-Name:South Sudan
// Region:Africa
// SUB-Region:Middle Africa
// Population:11193729
// Flag:https://flagcdn.com/bv.svg
// Country-Name:Bouvet Island
// Region:Antarctic
// SUB-Region:undefined
// Population:0
// Flag:https://flagcdn.com/fm.svg
// Country-Name:Micronesia
// Region:Oceania
// SUB-Region:Micronesia
// Population:115021
// Flag:https://flagcdn.com/as.svg
// Country-Name:American Samoa
// Region:Oceania
// SUB-Region:Polynesia
// Population:55197
// Flag:https://flagcdn.com/cz.svg
// Country-Name:Czechia
// Region:Europe
// SUB-Region:Central Europe
// Population:10698896
// Flag:https://flagcdn.com/bw.svg
// Country-Name:Botswana
// Region:Africa
// SUB-Region:Southern Africa
// Population:2351625
// Flag:https://flagcdn.com/tn.svg
// Country-Name:Tunisia
// Region:Africa
// SUB-Region:Northern Africa
// Population:11818618
// Flag:https://flagcdn.com/ai.svg
// Country-Name:Anguilla
// Region:Americas
// SUB-Region:Caribbean
// Population:13452
// Flag:https://flagcdn.com/gw.svg
// Country-Name:Guinea-Bissau
// Region:Africa
// SUB-Region:Western Africa
// Population:1967998
// Flag:https://flagcdn.com/sk.svg
// Country-Name:Slovakia
// Region:Europe
// SUB-Region:Central Europe
// Population:5458827
// Flag:https://flagcdn.com/mh.svg
// Country-Name:Marshall Islands
// Region:Oceania
// SUB-Region:Micronesia
// Population:59194
// Flag:https://flagcdn.com/dz.svg
// Country-Name:Algeria
// Region:Africa
// SUB-Region:Northern Africa
// Population:44700000
// Flag:https://flagcdn.com/jm.svg
// Country-Name:Jamaica
// Region:Americas
// SUB-Region:Caribbean
// Population:2961161
// Flag:https://flagcdn.com/mz.svg
// Country-Name:Mozambique
// Region:Africa
// SUB-Region:Eastern Africa
// Population:31255435
// Flag:https://flagcdn.com/es.svg
// Country-Name:Spain
// Region:Europe
// SUB-Region:Southern Europe
// Population:47351567
// Flag:https://flagcdn.com/hn.svg
// Country-Name:Honduras
// Region:Americas
// SUB-Region:Central America
// Population:9904608
// Flag:https://flagcdn.com/nl.svg
// Country-Name:Netherlands
// Region:Europe
// SUB-Region:Western Europe
// Population:16655799
// Flag:https://flagcdn.com/za.svg
// Country-Name:South Africa
// Region:Africa
// SUB-Region:Southern Africa
// Population:59308690
// Flag:https://flagcdn.com/az.svg
// Country-Name:Azerbaijan
// Region:Asia
// SUB-Region:Western Asia
// Population:10110116
// Flag:https://flagcdn.com/mk.svg
// Country-Name:North Macedonia
// Region:Europe
// SUB-Region:Southeast Europe
// Population:2077132
// Flag:https://flagcdn.com/gm.svg
// Country-Name:Gambia
// Region:Africa
// SUB-Region:Western Africa
// Population:2416664
// Flag:https://flagcdn.com/lr.svg
// Country-Name:Liberia
// Region:Africa
// SUB-Region:Western Africa
// Population:5057677
// Flag:https://flagcdn.com/lu.svg
// Country-Name:Luxembourg
// Region:Europe
// SUB-Region:Western Europe
// Population:632275
// Flag:https://flagcdn.com/cv.svg
// Country-Name:Cape Verde
// Region:Africa
// SUB-Region:Western Africa
// Population:555988
// Flag:https://flagcdn.com/bs.svg
// Country-Name:Bahamas
// Region:Americas
// SUB-Region:Caribbean
// Population:393248
// Flag:https://flagcdn.com/ge.svg
// Country-Name:Georgia
// Region:Asia
// SUB-Region:Western Asia
// Population:3714000
// Flag:https://flagcdn.com/ki.svg
// Country-Name:Kiribati
// Region:Oceania
// SUB-Region:Micronesia
// Population:119446
// Flag:https://flagcdn.com/tz.svg
// Country-Name:Tanzania
// Region:Africa
// SUB-Region:Eastern Africa
// Population:59734213
// Flag:https://flagcdn.com/cn.svg
// Country-Name:China
// Region:Asia
// SUB-Region:Eastern Asia
// Population:1402112000
// Flag:https://flagcdn.com/gt.svg
// Country-Name:Guatemala
// Region:Americas
// SUB-Region:Central America
// Population:16858333
// Flag:https://flagcdn.com/st.svg
// Country-Name:São Tomé and Príncipe
// Region:Africa
// SUB-Region:Middle Africa
// Population:219161
// Flag:https://flagcdn.com/de.svg
// Country-Name:Germany
// Region:Europe
// SUB-Region:Western Europe
// Population:83240525
// Flag:https://flagcdn.com/sl.svg
// Country-Name:Sierra Leone
// Region:Africa
// SUB-Region:Western Africa
// Population:7976985
// Flag:https://flagcdn.com/td.svg
// Country-Name:Chad
// Region:Africa
// SUB-Region:Middle Africa
// Population:16425859
// Flag:https://flagcdn.com/gb.svg
// Country-Name:United Kingdom
// Region:Europe
// SUB-Region:Northern Europe
// Population:67215293
// Flag:https://flagcdn.com/si.svg
// Country-Name:Slovenia
// Region:Europe
// SUB-Region:Central Europe
// Population:2100126
// Flag:https://flagcdn.com/th.svg
// Country-Name:Thailand
// Region:Asia
// SUB-Region:South-Eastern Asia
// Population:69799978
// Flag:https://flagcdn.com/id.svg
// Country-Name:Indonesia
// Region:Asia
// SUB-Region:South-Eastern Asia
// Population:273523621
// Flag:https://flagcdn.com/mp.svg
// Country-Name:Northern Mariana Islands
// Region:Oceania
// SUB-Region:Micronesia
// Population:57557
// Flag:https://flagcdn.com/gu.svg
// Country-Name:Guam
// Region:Oceania
// SUB-Region:Micronesia
// Population:168783
// Flag:https://flagcdn.com/fi.svg
// Country-Name:Finland
// Region:Europe
// SUB-Region:Northern Europe
// Population:5530719
// Flag:https://flagcdn.com/yt.svg
// Country-Name:Mayotte
// Region:Africa
// SUB-Region:Eastern Africa
// Population:226915
// Flag:https://flagcdn.com/gi.svg
// Country-Name:Gibraltar
// Region:Europe
// SUB-Region:Southern Europe
// Population:33691
// Flag:https://flagcdn.com/tm.svg
// Country-Name:Turkmenistan
// Region:Asia
// SUB-Region:Central Asia
// Population:6031187
// Flag:https://flagcdn.com/xk.svg
// Country-Name:Kosovo
// Region:Europe
// SUB-Region:Southeast Europe
// Population:1775378
// Flag:https://flagcdn.com/ci.svg
// Country-Name:Ivory Coast
// Region:Africa
// SUB-Region:Western Africa
// Population:26378275
// Flag:https://flagcdn.com/ma.svg
// Country-Name:Morocco
// Region:Africa
// SUB-Region:Northern Africa
// Population:36910558
// Flag:https://flagcdn.com/do.svg
// Country-Name:Dominican Republic
// Region:Americas
// SUB-Region:Caribbean
// Population:10847904
// Flag:https://flagcdn.com/gh.svg
// Country-Name:Ghana
// Region:Africa
// SUB-Region:Western Africa
// Population:31072945
// Flag:https://flagcdn.com/va.svg
// Country-Name:Vatican City
// Region:Europe
// SUB-Region:Southern Europe
// Population:451
// Flag:https://flagcdn.com/je.svg
// Country-Name:Jersey
// Region:Europe
// SUB-Region:Northern Europe
// Population:100800
// Flag:https://flagcdn.com/tr.svg
// Country-Name:Turkey
// Region:Asia
// SUB-Region:Western Asia
// Population:84339067
// Flag:https://flagcdn.com/tv.svg
// Country-Name:Tuvalu
// Region:Oceania
// SUB-Region:Polynesia
// Population:11792
// Flag:https://flagcdn.com/ir.svg
// Country-Name:Iran
// Region:Asia
// SUB-Region:Southern Asia
// Population:83992953
// Flag:https://flagcdn.com/eg.svg
// Country-Name:Egypt
// Region:Africa
// SUB-Region:Northern Africa
// Population:102334403
// Flag:https://flagcdn.com/dk.svg
// Country-Name:Denmark
// Region:Europe
// SUB-Region:Northern Europe
// Population:5831404
// Flag:https://flagcdn.com/ke.svg
// Country-Name:Kenya
// Region:Africa
// SUB-Region:Eastern Africa
// Population:53771300
// Flag:https://flagcdn.com/bg.svg
// Country-Name:Bulgaria
// Region:Europe
// SUB-Region:Southeast Europe
// Population:6927288
// Flag:https://flagcdn.com/zw.svg
// Country-Name:Zimbabwe
// Region:Africa
// SUB-Region:Southern Africa
// Population:14862927
// Flag:https://flagcdn.com/ao.svg
// Country-Name:Angola
// Region:Africa
// SUB-Region:Middle Africa
// Population:32866268
// Flag:https://flagcdn.com/ng.svg
// Country-Name:Nigeria
// Region:Africa
// SUB-Region:Western Africa
// Population:206139587
// Flag:https://flagcdn.com/pl.svg
// Country-Name:Poland
// Region:Europe
// SUB-Region:Central Europe
// Population:37950802
// Flag:https://flagcdn.com/sn.svg
// Country-Name:Senegal
// Region:Africa
// SUB-Region:Western Africa
// Population:16743930
// Flag:https://flagcdn.com/sh.svg
// Country-Name:Saint Helena, Ascension and Tristan da Cunha
// Region:Africa
// SUB-Region:Western Africa
// Population:53192
// Flag:https://flagcdn.com/lb.svg
// Country-Name:Lebanon
// Region:Asia
// SUB-Region:Western Asia
// Population:6825442
// Flag:https://flagcdn.com/ws.svg
// Country-Name:Samoa
// Region:Oceania
// SUB-Region:Polynesia
// Population:198410
// Flag:https://flagcdn.com/ph.svg
// Country-Name:Philippines
// Region:Asia
// SUB-Region:South-Eastern Asia
// Population:109581085
// Flag:https://flagcdn.com/gg.svg
// Country-Name:Guernsey
// Region:Europe
// SUB-Region:Northern Europe
// Population:62999
// Flag:https://flagcdn.com/sv.svg
// Country-Name:El Salvador
// Region:Americas
// SUB-Region:Central America
// Population:6486201
// Flag:https://flagcdn.com/kw.svg
// Country-Name:Kuwait
// Region:Asia
// SUB-Region:Western Asia
// Population:4270563
// Flag:https://flagcdn.com/to.svg
// Country-Name:Tonga
// Region:Oceania
// SUB-Region:Polynesia
// Population:105697
// Flag:https://flagcdn.com/om.svg
// Country-Name:Oman
// Region:Asia
// SUB-Region:Western Asia
// Population:5106622
// Flag:https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
// Country-Name:Afghanistan
// Region:Asia
// SUB-Region:Southern Asia
// Population:40218234
// Flag:https://flagcdn.com/kn.svg
// Country-Name:Saint Kitts and Nevis
// Region:Americas
// SUB-Region:Caribbean
// Population:53192
// Flag:https://flagcdn.com/cf.svg
// Country-Name:Central African Republic
// Region:Africa
// SUB-Region:Middle Africa
// Population:4829764
// Flag:https://flagcdn.com/rs.svg
// Country-Name:Serbia
// Region:Europe
// SUB-Region:Southeast Europe
// Population:6908224
// Flag:https://flagcdn.com/am.svg
// Country-Name:Armenia
// Region:Asia
// SUB-Region:Western Asia
// Population:2963234
// Flag:https://flagcdn.com/bd.svg
// Country-Name:Bangladesh
// Region:Asia
// SUB-Region:Southern Asia
// Population:164689383
// Flag:https://flagcdn.com/la.svg
// Country-Name:Laos
// Region:Asia
// SUB-Region:South-Eastern Asia
// Population:7275556
// Flag:https://flagcdn.com/cl.svg
// Country-Name:Chile
// Region:Americas
// SUB-Region:South America
// Population:19116209
// Flag:https://flagcdn.com/pf.svg
// Country-Name:French Polynesia
// Region:Oceania
// SUB-Region:Polynesia
// Population:280904
// Flag:https://flagcdn.com/pa.svg
// Country-Name:Panama
// Region:Americas
// SUB-Region:Central America
// Population:4314768
// Flag:https://flagcdn.com/us.svg
// Country-Name:United States
// Region:Americas
// SUB-Region:North America
// Population:329484123
// Flag:https://flagcdn.com/np.svg
// Country-Name:Nepal
// Region:Asia
// SUB-Region:Southern Asia
// Population:29136808
// Flag:https://flagcdn.com/mm.svg
// Country-Name:Myanmar
// Region:Asia
// SUB-Region:South-Eastern Asia
// Population:54409794
// Flag:https://flagcdn.com/fk.svg
// Country-Name:Falkland Islands
// Region:Americas
// SUB-Region:South America
// Population:2563
// Flag:https://flagcdn.com/hu.svg
// Country-Name:Hungary
// Region:Europe
// SUB-Region:Central Europe
// Population:9749763
// Flag:https://flagcdn.com/pw.svg
// Country-Name:Palau
// Region:Oceania
// SUB-Region:Micronesia
// Population:18092
// Flag:https://flagcdn.com/gq.svg
// Country-Name:Equatorial Guinea
// Region:Africa
// SUB-Region:Middle Africa
// Population:1402985
// Flag:https://flagcdn.com/gn.svg
// Country-Name:Guinea
// Region:Africa
// SUB-Region:Western Africa
// Population:13132792
// Flag:https://flagcdn.com/ae.svg
// Country-Name:United Arab Emirates
// Region:Asia
// SUB-Region:Western Asia
// Population:9890400
// Flag:https://flagcdn.com/tc.svg
// Country-Name:Turks and Caicos Islands
// Region:Americas
// SUB-Region:Caribbean
// Population:38718
// Flag:https://flagcdn.com/vg.svg
// Country-Name:British Virgin Islands
// Region:Americas
// SUB-Region:Caribbean
// Population:30237
// Flag:https://flagcdn.com/li.svg
// Country-Name:Liechtenstein
// Region:Europe
// SUB-Region:Western Europe
// Population:38137
// Flag:https://flagcdn.com/ba.svg
// Country-Name:Bosnia and Herzegovina
// Region:Europe
// SUB-Region:Southeast Europe
// Population:3280815
// Flag:https://flagcdn.com/mw.svg
// Country-Name:Malawi
// Region:Africa
// SUB-Region:Eastern Africa
// Population:19129955
// Flag:https://flagcdn.com/bt.svg
// Country-Name:Bhutan
// Region:Asia
// SUB-Region:Southern Asia
// Population:771612
// Flag:https://flagcdn.com/cm.svg
// Country-Name:Cameroon
// Region:Africa
// SUB-Region:Middle Africa
// Population:26545864
// Flag:https://flagcdn.com/ad.svg
// Country-Name:Andorra
// Region:Europe
// SUB-Region:Southern Europe
// Population:77265
// Flag:https://flagcdn.com/gp.svg
// Country-Name:Guadeloupe
// Region:Americas
// SUB-Region:Caribbean
// Population:400132
// Flag:https://flagcdn.com/cg.svg
// Country-Name:Republic of the Congo
// Region:Africa
// SUB-Region:Middle Africa
// Population:5657000
// Flag:https://flagcdn.com/re.svg
// Country-Name:Réunion
// Region:Africa
// SUB-Region:Eastern Africa
// Population:840974
// Flag:https://flagcdn.com/bf.svg
// Country-Name:Burkina Faso
// Region:Africa
// SUB-Region:Western Africa
// Population:20903278
// Flag:https://flagcdn.com/jo.svg
// Country-Name:Jordan
// Region:Asia
// SUB-Region:Western Asia
// Population:10203140
// Flag:https://flagcdn.com/cd.svg
// Country-Name:DR Congo
// Region:Africa
// SUB-Region:Middle Africa
// Population:108407721
// Flag:https://flagcdn.com/tk.svg
// Country-Name:Tokelau
// Region:Oceania
// SUB-Region:Polynesia
// Population:1411
// Flag:https://flagcdn.com/vn.svg
// Country-Name:Vietnam
// Region:Asia
// SUB-Region:South-Eastern Asia
// Population:97338583
// Flag:https://flagcdn.com/sx.svg
// Country-Name:Sint Maarten
// Region:Americas
// SUB-Region:Caribbean
// Population:40812
// Flag:https://flagcdn.com/be.svg
// Country-Name:Belgium
// Region:Europe
// SUB-Region:Western Europe
// Population:11555997
// Flag:https://flagcdn.com/um.svg
// Country-Name:United States Minor Outlying Islands
// Region:Americas
// SUB-Region:North America
// Population:300
// Flag:https://flagcdn.com/br.svg
// Country-Name:Brazil
// Region:Americas
// SUB-Region:South America
// Population:212559409
// Flag:https://flagcdn.com/bz.svg
// Country-Name:Belize
// Region:Americas
// SUB-Region:Central America
// Population:397621
// Flag:https://flagcdn.com/ag.svg
// Country-Name:Antigua and Barbuda
// Region:Americas
// SUB-Region:Caribbean
// Population:97928
// Flag:https://flagcdn.com/py.svg
// Country-Name:Paraguay
// Region:Americas
// SUB-Region:South America
// Population:7132530
// Flag:https://flagcdn.com/bj.svg
// Country-Name:Benin
// Region:Africa
// SUB-Region:Western Africa
// Population:12123198
// Flag:https://flagcdn.com/bn.svg
// Country-Name:Brunei
// Region:Asia
// SUB-Region:South-Eastern Asia
// Population:437483
// Flag:https://flagcdn.com/bo.svg
// Country-Name:Bolivia
// Region:Americas
// SUB-Region:South America
// Population:11673029
// Flag:https://flagcdn.com/dj.svg
// Country-Name:Djibouti
// Region:Africa
// SUB-Region:Eastern Africa
// Population:988002
// Flag:https://flagcdn.com/gf.svg
// Country-Name:French Guiana
// Region:Americas
// SUB-Region:South America
// Population:254541
// Flag:https://flagcdn.com/ca.svg
// Country-Name:Canada
// Region:Americas
// SUB-Region:North America
// Population:38005238
// Flag:https://flagcdn.com/pm.svg
// Country-Name:Saint Pierre and Miquelon
// Region:Americas
// SUB-Region:North America
// Population:6069
// Flag:https://flagcdn.com/jp.svg
// Country-Name:Japan
// Region:Asia
// SUB-Region:Eastern Asia
// Population:125836021
// Flag:https://flagcdn.com/rw.svg
// Country-Name:Rwanda
// Region:Africa
// SUB-Region:Eastern Africa
// Population:12952209
// Flag:https://flagcdn.com/vc.svg
// Country-Name:Saint Vincent and the Grenadines
// Region:Americas
// SUB-Region:Caribbean
// Population:110947
// Flag:https://flagcdn.com/is.svg
// Country-Name:Iceland
// Region:Europe
// SUB-Region:Northern Europe
// Population:366425
// Flag:https://flagcdn.com/by.svg
// Country-Name:Belarus
// Region:Europe
// SUB-Region:Eastern Europe
// Population:9398861
// Flag:https://flagcdn.com/hk.svg
// Country-Name:Hong Kong
// Region:Asia
// SUB-Region:Eastern Asia
// Population:7500700
// Flag:https://flagcdn.com/ls.svg
// Country-Name:Lesotho
// Region:Africa
// SUB-Region:Southern Africa
// Population:2142252
// Flag:https://flagcdn.com/fj.svg
// Country-Name:Fiji
// Region:Oceania
// SUB-Region:Melanesia
// Population:896444
// Flag:https://flagcdn.com/at.svg
// Country-Name:Austria
// Region:Europe
// SUB-Region:Central Europe
// Population:8917205
// Flag:https://flagcdn.com/co.svg
// Country-Name:Colombia
// Region:Americas
// SUB-Region:South America
// Population:50882884
// Flag:https://flagcdn.com/ga.svg
// Country-Name:Gabon
// Region:Africa
// SUB-Region:Middle Africa
// Population:2225728
// Flag:https://flagcdn.com/sa.svg
// Country-Name:Saudi Arabia
// Region:Asia
// SUB-Region:Western Asia
// Population:34813867
// Flag:https://flagcdn.com/gs.svg
// Country-Name:South Georgia
// Region:Antarctic
// SUB-Region:undefined
// Population:30
// Flag:https://flagcdn.com/et.svg
// Country-Name:Ethiopia
// Region:Africa
// SUB-Region:Eastern Africa
// Population:114963583
// Flag:https://flagcdn.com/bq.svg
// Country-Name:Caribbean Netherlands
// Region:Americas
// SUB-Region:Caribbean
// Population:25987
// Flag:https://flagcdn.com/mc.svg
// Country-Name:Monaco
// Region:Europe
// SUB-Region:Western Europe
// Population:39244
// Flag:https://flagcdn.com/kp.svg
// Country-Name:North Korea
// Region:Asia
// SUB-Region:Eastern Asia
// Population:25778815
// Flag:https://flagcdn.com/it.svg
// Country-Name:Italy
// Region:Europe
// SUB-Region:Southern Europe
// Population:59554023
// Flag:https://flagcdn.com/na.svg
// Country-Name:Namibia
// Region:Africa
// SUB-Region:Southern Africa
// Population:2540916
// Flag:https://flagcdn.com/mn.svg
// Country-Name:Mongolia
// Region:Asia
// SUB-Region:Eastern Asia
// Population:3278292
// Flag:https://flagcdn.com/sb.svg
// Country-Name:Solomon Islands
// Region:Oceania
// SUB-Region:Melanesia
// Population:686878
// Flag:https://flagcdn.com/ye.svg
// Country-Name:Yemen
// Region:Asia
// SUB-Region:Western Asia
// Population:29825968
// Flag:https://flagcdn.com/ro.svg
// Country-Name:Romania
// Region:Europe
// SUB-Region:Southeast Europe
// Population:19286123
// Flag:https://flagcdn.com/sj.svg
// Country-Name:Svalbard and Jan Mayen
// Region:Europe
// SUB-Region:Northern Europe
// Population:2562
// Flag:https://flagcdn.com/fr.svg
// Country-Name:France
// Region:Europe
// SUB-Region:Western Europe
// Population:67391582
