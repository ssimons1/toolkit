<?php
$disabled = value('disabled', false); ?>

<form action="" method="get">
    <div class="field">
        <label class="field-label" for="select">Select</label>
        <select id="select" class="input" name="select" <?php if ($disabled) echo 'disabled'; ?>>
            <option value="">CSS</option>
            <option value="">HTML</option>
            <option value="">JavaScript</option>
        </select>
    </div>

    <div class="field">
        <label class="field-label" for="select_group">Select + Optgroup</label>
        <select id="select_group" class="input" name="select_group" <?php if ($disabled) echo 'disabled'; ?>>
            <optgroup label="Front-end">
                <option value="">CSS</option>
                <option value="">HTML</option>
                <option value="">JavaScript</option>
            </optgroup>
            <optgroup label="Back-end">
                <option value="">PHP</option>
                <option value="">Python</option>
                <option value="">Ruby</option>
            </optgroup>
        </select>
    </div>

    <div class="field">
        <label class="field-label" for="select_multi">Select + Multiple</label>
        <select id="select_multi" class="input" name="select_multi" multiple <?php if ($disabled) echo 'disabled'; ?>>
            <option value="">CSS</option>
            <option value="">HTML</option>
            <option value="">JavaScript</option>
            <option value="">PHP</option>
            <option value="">Python</option>
            <option value="">Ruby</option>
        </select>
    </div>

    <div class="field">
        <label class="input-checkbox" for="checkboxes1"><input id="checkboxes1" type="checkbox" name="checkboxes[]" <?php if ($disabled) echo 'disabled'; ?>> Checkboxes</label>
        <label class="input-checkbox" for="checkboxes2"><input id="checkboxes2" type="checkbox" name="checkboxes[]" <?php if ($disabled) echo 'disabled'; ?>> Checkboxes</label>
        <label class="input-checkbox" for="checkboxes3"><input id="checkboxes3" type="checkbox" name="checkboxes[]" <?php if ($disabled) echo 'disabled'; ?>> Checkboxes</label>
        <label class="input-checkbox" for="checkboxes4"><input id="checkboxes4" type="checkbox" name="checkboxes[]" <?php if ($disabled) echo 'disabled'; ?>> Checkboxes</label>
        <label class="input-checkbox" for="checkboxes5"><input id="checkboxes5" type="checkbox" name="checkboxes[]" <?php if ($disabled) echo 'disabled'; ?>> Checkboxes</label>
    </div>

    <div class="field">
        <label class="input-checkbox" for="radios1"><input id="radios1" type="radio" name="radios[]" <?php if ($disabled) echo 'disabled'; ?>> Radios</label>
        <label class="input-checkbox" for="radios2"><input id="radios2" type="radio" name="radios[]" <?php if ($disabled) echo 'disabled'; ?>> Radios</label>
        <label class="input-checkbox" for="radios3"><input id="radios3" type="radio" name="radios[]" <?php if ($disabled) echo 'disabled'; ?>> Radios</label>
        <label class="input-checkbox" for="radios4"><input id="radios4" type="radio" name="radios[]" <?php if ($disabled) echo 'disabled'; ?>> Radios</label>
        <label class="input-checkbox" for="radios5"><input id="radios5" type="radio" name="radios[]" <?php if ($disabled) echo 'disabled'; ?>> Radios</label>
    </div>
</form>

<script>
    <?php if ($vendor === 'mootools') { ?>
        window.addEvent('domready', function() {
           $$('.example form').input({
               checkbox: '<?php echo value('checkbox') ? 'input[type="checkbox"]' : ''; ?>',
               radio: '<?php echo value('radio') ? 'input[type="radio"]' : ''; ?>',
               select: '<?php echo value('select') ? 'select' : ''; ?>'
           });
        });
    <?php } else { ?>
        $(function() {
            $('.example form').input({
               checkbox: '<?php echo value('checkbox') ? 'input:checkbox' : ''; ?>',
               radio: '<?php echo value('radio') ? 'input:radio' : ''; ?>',
               select: '<?php echo value('select') ? 'select' : ''; ?>'
           });
        });
    <?php } ?>
</script>