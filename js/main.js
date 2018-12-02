$(document).ready(function () {
    const $loader = $('.loader');
    $('select').on('change', function () {
        $loader.css('display', 'flex');
        let url = 'https://api.nytimes.com/svc/topstories/v2/' + $('select').val() + '.json';
        url += '?' + $.param({
            'api-key': '82f12f3e4189492f86578cb2d4e6add0'
        });
        $('.logo').addClass('shrink');
        $('#idListe').addClass('form-anim');
        $('body').addClass('body-move');
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (data) {
            const $allArticle = $('.all-article');
            $allArticle.empty();
            let articleCounter = 0;
            for (let i = 0; i < 12 && articleCounter < 12; i++) {
                const img = data.results[i].multimedia[4].url;
                const url = data.results[i].url;
                const description = data.results[i].abstract;
                if (data.results[i].multimedia.length) {
                    articleCounter += 1;
                    const $article = $('<a target="_blank" href="' +
                    url + '"class="articleLink"><section class="articleSection"><h2 class="articleDescription">' +
                    description + '</h2></section></a>');
                    $allArticle.append($article) +
                    $article.css('background-image', 'url("' + img + '")');
                }
                $loader.css('display', 'none');
            }
        }).fail(function (err) {
            throw err;
        });
    })
});