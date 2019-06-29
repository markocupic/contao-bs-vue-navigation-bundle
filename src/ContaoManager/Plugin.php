<?php
/**
 * @copyright  Marko Cupic 2019 <m.cupic@gmx.ch>
 * @author     Marko Cupic
 * @package    Contao Bs Vue Navigation Bundle
 * @license    LGPL-3.0+
 * @see	       https://github.com/markocupic/contao-article-class-select-bundle
 *
 */

namespace Markocupic\ContaoBsVueNavigationBundle\ContaoManager;

use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;

/**
 * Plugin for the Contao Manager.
 *
 * @author Marko Cupic
 */
class Plugin implements BundlePluginInterface
{
    /**
     * {@inheritdoc}
     */
    public function getBundles(ParserInterface $parser)
    {
        return [
            BundleConfig::create('Markocupic\ContaoBsVueNavigationBundle\MarkocupicContaoBsVueNavigationBundle')
                ->setLoadAfter([
                  'Contao\CoreBundle\ContaoCoreBundle',
                ])
        ];
    }
}
