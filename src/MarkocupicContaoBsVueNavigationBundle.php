<?php
/**
 * @copyright  Marko Cupic 2019 <m.cupic@gmx.ch>
 * @author     Marko Cupic
 * @package    Contao Bs Vue Navigation Bundle
 * @license    LGPL-3.0+
 * @see	       https://github.com/markocupic/contao-bs-vue-navigation-bundle
 *
 */

namespace Markocupic\ContaoBsVueNavigationBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class MarkocupicContaoBsVueNavigationBundle extends Bundle
{
    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
}
