<?php

declare(strict_types=1);

/*
 * This file is part of Contao Bootstrap Vue Navigation Bundle.
 *
 * (c) Marko Cupic 2023 <m.cupic@gmx.ch>
 * MIT
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 * @link https://github.com/markocupic/contao-bs-vue-navigation-bundle
 */

namespace Markocupic\ContaoBsVueNavigationBundle\ContaoManager;

use Contao\CoreBundle\ContaoCoreBundle;
use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;
use Markocupic\ContaoBsVueNavigationBundle\MarkocupicContaoBsVueNavigationBundle;

class Plugin implements BundlePluginInterface
{
    /**
     * {@inheritdoc}
     */
    public function getBundles(ParserInterface $parser)
    {
        return [
            BundleConfig::create(MarkocupicContaoBsVueNavigationBundle::class)
                ->setLoadAfter([
                    ContaoCoreBundle::class,
                ]),
        ];
    }
}
