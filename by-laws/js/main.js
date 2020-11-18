$(function() {
    cityClick();
});

function cityClick() {
    var tools = {
        abington: 'https://ecode360.com/8900080',
        amesbury: 'https://ecode360.com/13995398',
        andover: 'https://www.ecode360.com/15620999',
        blackstone: 'https://www.ecode360.com/8906092',
        burlington: 'http://www.burlington.org/20_06GBylaws.pdf',
        concord: 'https://concordma.gov/DocumentCenter/View/917/Water-Use-Restriction-Bylaw-PDF?bidId',
        dartmouth: 'https://www.ecode360.com/30836893',
        fairhaven: 'https://ecode360.com/10399369',
        falmouth: 'https://ecode360.com/9074436',
        fitchburg: 'https://ecode360.com/10432679',
        georgetown: 'https://ecode360.com/6484828',
        groton: 'https://ecode360.com/9077631',
        hanson: 'https://www.hanson-ma.gov/hanson-general-bylaws/pages/general-bylaw-article-3-15',
        haverhill: 'https://ecode360.com/6262790#6262790',
        hopedale: 'https://ecode360.com/15591037',
        ipswich: 'https://www.ecode360.com/30686579',
        lenox: 'https://www.townoflenox.com/sites/g/files/vyhlif3341/f/uploads/town_of_lenox_regulation_of_water_use_revised_2013.pdf',
        medfield: 'https://www.ecode360.com/27373945',
        mendon: 'https://www.mendonma.gov/sites/g/files/vyhlif881/f/uploads/3.12.20_-_mendon_bylaws_3.12.2020_update_1.pdf',
        middleton: 'https://www.ecode360.com/10440475',
        natick: 'https://www.natickma.gov/1155/Article-82---Water-Conservation',
        newbedford: 'https://library.municode.com/ma/new_bedford/codes/code_of_ordinances?nodeId=COOR_CH16MUUTSE_ARTVIIWAUSRE',
        northampton: 'https://ecode360.com/13265226',
        norton: 'https://www.ecode360.com/28320939',
        plainville: 'https://www.ecode360.com/11814943',
        rockland: 'https://ecode360.com/16016595',
        sharon: 'https://www.ecode360.com/29564284',
        southborough: 'https://ecode360.com/9539446',
        stoneham: 'http://www.stoneham-ma.gov/DocumentCenter/View/1222/CH14-Water',
        taunton: 'https://ecode360.com/29007883',
        topsfield: 'https://www.topsfield-ma.gov/sites/g/files/vyhlif5086/f/uploads/chapter_lviii_-_water_supply_by-laws.pdf',
        townsend: 'https://ecode360.com/32850892',
        wakefield: 'https://www.ecode360.com/12314708',
        walpole: 'https://ecode360.com/12698829',
        wayland: 'https://ecode360.com/12285623',
        webster: 'https://www.ecode360.com/9233620',
        weston: 'https://www.weston.org/DocumentCenter/View/5007/Water-Conservation-PDF?bidId=',
        weymouth: 'https://www.ecode360.com/30090329',
    };
    pointHide();

    function pointHide() {
        $('.point').each(function() {
            $(this).css('display', 'none');
        });
    }
    $('.point').on('click', function() {
        var point = $(this).attr('class').toLowerCase();
        console.log("clicked", point);
        for (var i in tools) {
            // console.log("clicked key",i);
            // console.log("clicked point",point);
            if (point.includes(i)) {
                console.log(tools[i]);
                window.open(tools[i], "_blank")
                    // window.location = tools[i];
            }
        }
    });

    $('.cities-name a').on('click', function(ev) {
        // pointHide(); 
        $('.map-svg .point').hide();
        $('html, body').animate({ scrollTop: $('.map-bylaw').position().top }, 'slow');
        console.log($.trim($(this).text().toLowerCase()).replace(/\s/g, ''));
        var evt = $(this);
        $('.' + evt.text().toLowerCase().replace(/\s/g, '')).show();
    });
}