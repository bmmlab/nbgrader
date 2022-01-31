define(function (require) {
    var $ = require('jquery');
    var Jupyter = require('base/js/namespace');

    function load() {
        if (!Jupyter.notebook_list) return;

        var base_url = Jupyter.notebook_list.base_url;
        var fg_url = base_url + 'formgrader';
        var fg_div_tab_id = 'formgrader';
        var fg_anchor = '#' + fg_div_tab_id;
        var fg_iframe_id = 'formgrader_iframe';

        $("#tabs").append(
            $('<li>')
            .append(
                $('<a>')
                    .attr('href', fg_anchor)
                    .attr('data-toggle', 'tab')
                    .text('Formgrader')
                    .click(function (e) {
                        window.history.pushState(null, null, fg_anchor);
                        $('#' + fg_iframe_id).attr('src', fg_url);
                    })
            )
        );

        // Create an iframe for formgrader's tab
        var formgrader_iframe_html = $([
            '<div id="formgrader" class="tab-pane">',
            '  <iframe id="' + fg_iframe_id + '" name="' + fg_iframe_id + '" width="100%" style="height: 100vh; border: 0">',
            '  </iframe>   ',
            '</div>'
        ].join('\n'));

        // Add this to Tree views tabs
        $(".tab-content").append(formgrader_iframe_html);
    }

    return {
        load_ipython_extension: load
    };
});
